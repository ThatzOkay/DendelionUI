import { Size } from "@/types";

export type TableProps = {
    zebra?: boolean;
    pinRows?: boolean;
    pinCols?: boolean;
    size: Size
    columns: Column[];
    dataSource: Record<string, unknown>[];
    ajax?: (params: object) => Promise<object>;
}

export type Column = {
    title: string;
    data: string;
    render?: (text: string, record?: Record<string, unknown>) => string;
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