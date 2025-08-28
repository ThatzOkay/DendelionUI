<template>
	<table ref="table" :class="tableClasses">
		<thead v-if="!horizontal">
			<tr>
				<th v-for="column in props.columns" v-bind:key="column.title">
					{{ column.title }}
				</th>
			</tr>
		</thead>
		<tbody v-if="!horizontal">
			<tr v-if="filteredDataSource.length === 0">
				<td :colspan="props.columns.length">No data found</td>
			</tr>
			<tr :class="props.onRowClick ? 'hover' : ''" v-else v-for="(row, rowIndex) in filteredDataSource"
				v-bind:key="JSON.stringify(row as T)" @click="handleRowClick(row as T, rowIndex)">
				<TableColumn v-for="column in props.columns" v-bind:key="column.data" :column="column" :row="row as T"
					:rowIndex="rowIndex" />
			</tr>
		</tbody>
		<tbody v-if="horizontal">
			<tr v-for="(column) in props.columns" :key="column.title">
				<th>{{ column.title }}</th>
				<TableColumn
					v-for="(row, rowIndex) in filteredDataSource"
					:key="rowIndex"
					:column="column"
					:row="row as T"
					:rowIndex="rowIndex"
				/>
			</tr>

			<tr v-if="filteredDataSource.length === 0">
				<td :colspan="props.columns.length + 1" style="text-align:center; padding:1rem;">
					No data found
				</td>
			</tr>
		</tbody>
	</table>
</template>

<script setup lang="ts" generic="T">
import { onMounted, ref, watch } from 'vue';
import { getValue, TableProps } from './interface';
import classNames from 'classnames';
import { Size, TableSizeUtils } from '../../types';
import createFuzzySearch from '@nozbe/microfuzz';
import TableColumn from './TableColumn.vue';

const originalDataSource = ref<T[]>([]);
const filteredDataSource = ref<T[]>([]);

const table = ref<HTMLTableElement | null>(null);

const props = withDefaults(defineProps<TableProps<T>>(), {
	size: Size.MD,
	zebra: false,
	pinRows: false,
	pinCols: false,
	horizontal: false,
});

const tableClasses = ref(
	classNames('table', TableSizeUtils.toClassName(props.size), {
		'table-zebra': props.zebra,
		'table-pin-rows': props.pinRows,
		'table-pin-cols	': props.pinCols,
	}),
);

const handleRowClick = (row: T, rowIndex: number) => {
	if (props.onRowClick) {
		props.onRowClick(row, rowIndex);
	}
}

//I'll figure pagination later


onMounted(() => {
	originalDataSource.value = props.dataSource;
	filteredDataSource.value = props.dataSource;
});

watch(
	() => props.dataSource,
	(value) => {
		console.log('dataSource changed', value);
		originalDataSource.value = value;
		filteredDataSource.value = value;
	},
	{ immediate: true },
);

watch(
	() => props.searchValue,
	(value) => {
		if (props.searchFunction) {
			filteredDataSource.value = props.searchFunction(value ?? '');
			return;
		}
		filteredDataSource.value = value ? doFuzzySearch(value) : originalDataSource.value;
	},
	{ immediate: true },
);

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
				foundRows.push(...(matchingItems as T[]));
			}
		});

		return foundRows;
	}

	return [];
};
</script>
