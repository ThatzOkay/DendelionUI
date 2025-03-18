export enum RoundedSize {
    XS,
    SM,
    MD,
    LG,
    XL,
    TWOXL,
    THREEXL
}

export class RoundedSizeUtils {
    public static toClassName(size: RoundedSize): string {
        switch (size) {
            case RoundedSize.XS:
                return 'rounded-xs'
            case RoundedSize.SM:
                return 'rounded-sm'
            case RoundedSize.MD:
                return 'rounded-md'
            case RoundedSize.LG:
                return 'rounded-lg'
            case RoundedSize.XL:
                return 'rounded-xl'
            case RoundedSize.TWOXL:
                return 'rounded-2xl'
            case RoundedSize.THREEXL:
                return 'rounded-3xl'
            default:
                return 'rounded-md'
        }
    }
}