import { Size } from '@/types';
import { Component } from 'vue';

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
};

export type Column<T> = {
	title: string;
	data: string;
	render?: (text: string, row: T) => string | ColumnComponent;
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
