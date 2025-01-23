import { Color } from "@/types/color";

export type Type = 'button' | 'submit' | 'reset';

export type ButtonProps = {
    type?: Type,
    loading?: boolean,
    color?: Color,
    click?: () => void,
  };