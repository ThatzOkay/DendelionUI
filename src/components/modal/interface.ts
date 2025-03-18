import { Size } from "@/types";

export type ModalProps = {
    closeButton?: boolean;
    overflow?: boolean;
    closeButtonSize?: Size;
}

export interface Modal {
    showModal: () => void;
}