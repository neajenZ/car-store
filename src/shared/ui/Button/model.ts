import { ButtonHTMLAttributes, ReactElement, ReactNode } from "react";

export type IProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> & {
    text?: string,
    styleType?: 'link' | 'default' | 'danger',
    icon?: ReactElement | ReactNode,
    iconPosition?: 'left' | 'right',
    rootClass?: string
}