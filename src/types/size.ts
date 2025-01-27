export enum Size {
    XS,
    SM,
    MD,
    LG,
    XL,
    TWOXL,
    THREEXL
}

export class SizeUtils {
    public static toClassName(size: Size): string {
        switch (size) {
            case Size.XS:
                return 'xs'
            case Size.SM:
                return 'sm'
            case Size.MD:
                return 'md'
            case Size.LG:
                return 'lg'
            case Size.XL:
                return 'xl'
            case Size.TWOXL:
                return '2xl'
            case Size.THREEXL:
                return '3xl'
            default:
                return 'md'
        }
    }
}