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

export type ColumnProps<T> = {
	column: Column<T>;
	row: T;
	rowIndex: number;
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

export const getValue = (obj: any, keyPath: string): string => {
	if (!obj || typeof obj !== 'object') return String(obj);
	return String(
		keyPath
			.split('.')
			.reduce<unknown>((acc, key) => acc && (typeof acc === 'object' ? (acc as Record<string, any>)[key] : acc), obj),
	);
};