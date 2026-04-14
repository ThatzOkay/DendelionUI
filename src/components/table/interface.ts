import { Size } from '@/types';
import { Component, VNode } from 'vue';

type DeepKey<T> = T extends object
    ? {
          [K in keyof T & string]: K | `${K}.${DeepKey<T[K]>}`;
      }[keyof T & string]
    : never;

type DeepValue<T, P extends string> = P extends `${infer K}.${infer Rest}`
    ? K extends keyof T
        ? DeepValue<T[K], Rest>
        : never
    : P extends keyof T
    ? T[P]
    : never;


export type TableProps<T> = {
	zebra?: boolean;
	pinRows?: boolean;
	pinCols?: boolean;
	horizontal?: boolean;
	size?: Size;
	customRowClasses?: string;
	columns: Column<T, DeepKey<T>>[];
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

export type Column<T, K extends DeepKey<T> = DeepKey<T>> = {
    title: string;
    data: K;
    render?: (text: DeepValue<T, K & string>, row: T) => string | ColumnComponent | VNode;
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

export const getValue = <T, K extends DeepKey<T>>(obj: T, keyPath: K): DeepValue<T, K & string> => {
	if (!obj || typeof obj !== 'object') return String(obj) as DeepValue<T, K & string>;
	return keyPath
		.split('.')
		.reduce<unknown>((acc, key) => acc && (typeof acc === 'object' ? (acc as Record<string, any>)[key] : acc), obj) as DeepValue<T, K & string>;
};

export const defineColumns = <T> () => {
	return <K extends DeepKey<T>>(cols: Column<T, K>[]) => cols;
}