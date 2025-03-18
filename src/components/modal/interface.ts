import { ButtonSize } from "@/types";

export type ModalProps = {
    closeButton?: boolean;
    overflow?: boolean;
    closeButtonSize?: ButtonSize;
}

export interface Modal {
    showModal: () => void;
}