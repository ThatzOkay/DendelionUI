<template>
    <td>
        <template v-if="!column.render">
            {{ getValue(row, column.data) }}
        </template>
        <template v-else-if="row">
            <div v-if="cell">
                <div v-if="typeof cell === 'string'">
                    <div v-html="cell" />
                </div>
                <div v-else-if="isVNode(cell)">
                    <component :is="cell" />
                </div>
                <div v-else>
                    <component :is="getComponent((cell as ColumnComponent).component)"
                        v-bind="getProps(row as T, column)" />
                </div>
            </div>
        </template>
    </td>
</template>

<script setup lang="ts" generic="T">
import { computed, defineAsyncComponent, isVNode, onMounted, ref } from 'vue';
import type { Component } from 'vue';
import { Column, ColumnComponent, ColumnProps, ComponentImport, ComponentOrImport, getValue } from './interface';

const props = defineProps<ColumnProps<T>>();

const cell = computed(() => {
    if (!props.column.render) return getValue(props.row, props.column.data);
    return props.column.render(getValue(props.row, props.column.data), props.row as T);
});

onMounted(() => {
    if (cell.value && typeof cell.value === 'object' && 'then' in cell.value) {
        console.warn('Async component detected in TableColumn, this may cause issues with rendering.');
    }
});

const getProps = (row: T, column: Column<T>) => {
    if (column.render === undefined) return {};
    const columnComponent = column.render(getValue(row, column.data), row as T) as ColumnComponent;
    return columnComponent.props;
};

const getComponent = (component: ComponentOrImport) => {
    console.log('getComponent', component);
    if (component && typeof component === 'object' && 'then' in component) {
        return defineAsyncComponent(() => component as ComponentImport);
    }
    if (typeof component === 'function') {
        return defineAsyncComponent(component as () => ComponentImport);
    }
    return component as Component;
};

const renderCell = (row: T, column: Column<T>) => {
    if (!column.render) return getValue(row, column.data);
    return column.render(getValue(row, column.data), row as T);
};
</script>