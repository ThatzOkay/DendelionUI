import { ButtonColor } from "@/types";

export type Type = 'button' | 'submit' | 'reset';

export type ButtonProps = {
    type?: Type,
    loading?: boolean,
    color?: ButtonColor,
    disabled?: boolean,
    click?: () => void,
  };