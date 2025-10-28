import { Size } from "@/types";

export type TabsProps = {
    box?: boolean;
    border?: boolean;
    lift?: boolean;
    fullWidth?: boolean;
    placement?: 'top' | 'bottom';
    size?: Size;
    items: TabItem[];
    activeTab?: number;
}

export type TabItem = {
    label: string;
    slot: string;
    disabled?: boolean;
}