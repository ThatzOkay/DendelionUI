<template>
    <table ref="table" :class="tableClasses">
        <thead>
            <tr>
                <th v-for="column in props.columns" v-bind:key="column.title">
                    {{ column.title }}
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="row in filteredDataSource" v-bind:key="String(row)">
                <td v-for="column in props.columns" v-bind:key="column.title" v-html="column.render ? column.render(getValue(row, column.data), row as T) : getValue(row, column.data) ">                    
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script setup lang="ts" generic="T">
import { computed, ref, watch } from 'vue';
import { TableProps } from './interface';
import classNames from 'classnames';
import { Size, SizeUtils } from '@/types';
import createFuzzySearch from '@nozbe/microfuzz'

const originalDataSource = ref<T[]>([]);
const filteredDataSource = ref<T[]>([]);
const fuzzyDataSource = computed(() => {
    return createFuzzySearch(originalDataSource.value);
});

const table = ref<HTMLTableElement | null>(null)

const props = withDefaults(defineProps<TableProps<T>>(), {
    size: Size.MD,
    zebra: false,
    pinRows: false,
    pinCols: false,
});

const tableClasses = ref(classNames('table', `table-${SizeUtils.toClassName(props.size)}`, {
    'table-zebra': props.zebra,
    'table-pin-rows': props.pinRows,
    'table-pin-cols	': props.pinCols,
}));

//I'll figure pagination later
const getValue = (obj: any, keyPath: string): string => {
    if (!obj || typeof obj !== 'object') return String(obj);
    return String(
        keyPath.split('.').reduce<unknown>((acc, key) => acc && (typeof acc === 'object' ? (acc as Record<string, any>)[key] : acc), obj)
    );
};

watch(() => props.searchValue, (value) => {
    if (props.searchFunction) {
        filteredDataSource.value = props.searchFunction(value ?? "");
        return;
    }

    filteredDataSource.value = value ? fuzzyDataSource.value(value) as T[] : originalDataSource.value;
});

</script>