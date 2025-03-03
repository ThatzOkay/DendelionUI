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
import { onMounted, ref, watch } from 'vue';
import { TableProps } from './interface';
import classNames from 'classnames';
import { Size, SizeUtils } from '@/types';
import createFuzzySearch from '@nozbe/microfuzz'

const originalDataSource = ref<T[]>([]);
const filteredDataSource = ref<T[]>([]);

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

onMounted(() => {
    originalDataSource.value = props.dataSource;
    filteredDataSource.value = props.dataSource;
});

watch (() => props.dataSource, (value) => {
    originalDataSource.value = value;
    filteredDataSource.value = value;
});

watch(() => props.searchValue, (value) => {
    if (props.searchFunction) {
        filteredDataSource.value = props.searchFunction(value ?? "");
        return;
    }
    filteredDataSource.value = value ? doFuzzySearch(value) : originalDataSource.value;
});

const doFuzzySearch = (value: string): T[] => {
    const foundRows: T[] = [];
    if (originalDataSource.value.length > 0) {
        const dataKeys = Object.keys(originalDataSource.value[0] as object);

        dataKeys.forEach((key) => {
            const list = originalDataSource.value.map((row) => getValue(row, key));
            const fuzzySearch = createFuzzySearch(list);
            const found = fuzzySearch(value);
            for (const item of found) {
                const matchingItems = originalDataSource.value.filter((i) => getValue(i, key) === item.item);
                foundRows.push(...matchingItems as T[]);
            }
        });

        return foundRows;
    }

    return [];
}

</script>