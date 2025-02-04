
export type ModalProps = {
    closeButton?: boolean;
    overflow?: boolean;
}

export interface Modal {
    showModal: () => void;
}