import { Size } from '@/types';
import { Component, VNode } from 'vue';

export type TableProps<T> = {
	zebra?: boolean;
	pinRows?: boolean;
	pinCols?: boolean;
	size?: Size;
	columns: Column<T>[];
	dataSource: T[];
	ajax?: (params: object) => Promise<object> | string;
	searchValue?: string;
	searchFunction?: (searchValue: string) => T[];
	onRowClick?: (row: T, rowIndex: number) => Promise<void> | void;
};

export type Column<T> = {
	title: string;
	data: string;
	render?: (text: string, row: T) => string | ColumnComponent | VNode;
	extraClasses?: ExtraClasses;
};

export type ExtraClasses = {
	header?: string[];
	cell?: CellClasses;
};

export type CellClasses = {
	index: number;
	classes: string[];
};

export type ComponentImport = Promise<{ default: Component }>;
export type ComponentOrImport = Component | ComponentImport | (() => ComponentImport);

export type ColumnComponent = {
	component: ComponentOrImport;
	props: any;
};
