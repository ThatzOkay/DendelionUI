import { Size } from '@/types';

export type ModalProps = {
	closeButton?: boolean;
	overflow?: boolean;
	closeButtonSize?: Size;
	extraBoxClasses?: string;
};

export interface Modal {
	showModal: () => void;
}
