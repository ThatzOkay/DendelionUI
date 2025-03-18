export enum ButtonSize {
    XS,
    SM,
    MD,
    LG,
    XL,
    TWOXL,
    THREEXL
}

export class ButtonSizeUtils {
    public static toClassName(size: ButtonSize): string {
        switch (size) {
            case ButtonSize.XS:
                return 'btn-xs'
            case ButtonSize.SM:
                return 'btn-sm'
            case ButtonSize.MD:
                return 'btn-md'
            case ButtonSize.LG:
                return 'btn-lg'
            case ButtonSize.XL:
                return 'btn-xl'
            case ButtonSize.TWOXL:
                return 'btn-2xl'
            case ButtonSize.THREEXL:
                return 'btn-3xl'
            default:
                return 'btn-md'
        }
    }
}