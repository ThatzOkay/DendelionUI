export enum Size {
	XS,
	SM,
	MD,
	LG,
	XL,
	TWOXL,
	THREEXL,
}

export class ButtonSizeUtils {
	public static toClassName(size: Size): string {
		switch (size) {
			case Size.XS:
				return 'btn-xs';
			case Size.SM:
				return 'btn-sm';
			case Size.MD:
				return 'btn-md';
			case Size.LG:
				return 'btn-lg';
			case Size.XL:
				return 'btn-xl';
			case Size.TWOXL:
				return 'btn-2xl';
			case Size.THREEXL:
				return 'btn-3xl';
			default:
				return 'btn-md';
		}
	}
}

export class RoundedSizeUtils {
	public static toClassName(size: Size): string {
		switch (size) {
			case Size.XS:
				return 'rounded-xs';
			case Size.SM:
				return 'rounded-sm';
			case Size.MD:
				return 'rounded-md';
			case Size.LG:
				return 'rounded-lg';
			case Size.XL:
				return 'rounded-xl';
			case Size.TWOXL:
				return 'rounded-2xl';
			case Size.THREEXL:
				return 'rounded-3xl';
			default:
				return 'rounded-md';
		}
	}
}

export class TableSizeUtils {
	public static toClassName(size: Size): string {
		switch (size) {
			case Size.XS:
				return 'table-xs';
			case Size.SM:
				return 'table-sm';
			case Size.MD:
				return 'table-md';
			case Size.LG:
				return 'table-lg';
			case Size.XL:
				return 'table-xl';
			case Size.TWOXL:
				return 'table-2xl';
			case Size.THREEXL:
				return 'table-3xl';
			default:
				return 'table-md';
		}
	}
}
