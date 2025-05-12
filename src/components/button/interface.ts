import { Color } from '@/types';

export type Type = 'button' | 'submit' | 'reset';

export type ButtonProps = {
	type?: Type;
	loading?: boolean;
	color?: Color;
	soft?: boolean;
	outline?: boolean;
	disabled?: boolean;
	click?: () => void;
};
