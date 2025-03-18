import { TableSize } from "@/types";
import { Component, VNode } from "vue";

export type TableProps<T> = {
    zebra?: boolean;
    pinRows?: boolean;
    pinCols?: boolean;
    size?: TableSize
    columns: Column<T>[];
    dataSource: T[];
    ajax?: (params: object) => Promise<object> | string;
    searchValue?: string;
    searchFunction?: (searchValue: string) => T[];
}

export type Column<T> = {
    title: string;
    data: string;
    render?: (text: string, row: T) => string | Component | VNode;
    extraClasses?: ExtraClasses;
}

export type ExtraClasses = {
    header?: string[];
    cell?: CellClasses;
}

export type CellClasses = {
    index: number;
    classes: string[];
}