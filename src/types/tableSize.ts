export enum TableSize {
    XS,
    SM,
    MD,
    LG,
    XL,
    TWOXL,
    THREEXL
}

export class TableSizeUtils {
    public static toClassName(size: TableSize): string {
        switch (size) {
            case TableSize.XS:
                return 'table-xs'
            case TableSize.SM:
                return 'table-sm'
            case TableSize.MD:
                return 'table-md'
            case TableSize.LG:
                return 'table-lg'
            case TableSize.XL:
                return 'table-xl'
            case TableSize.TWOXL:
                return 'table-2xl'
            case TableSize.THREEXL:
                return 'table-3xl'
            default:
                return 'table-md'
        }
    }
}