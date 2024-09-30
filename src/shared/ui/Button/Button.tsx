import styles from './Button.module.css'

import { IProps } from './model'

export const Button = ({ text, icon, styleType = 'default', iconPosition, rootClass = '', ...props }: IProps) => {

    return (
        <button
            className={
                `${styles.btn} ${rootClass} 
                ${icon && !text
                        ? styles.withoutText
                            : icon && text
                        ? styles.withIcon
                    : ''} 
                ${styleType === 'link'
                    ? styles.link
                        : styleType === 'danger'
                            ? styles.danger
                    : styles.default}`}
            {...props}
        >
            {iconPosition === 'left' && icon}

            {text}

            {iconPosition === 'right' && icon}
        </button>
    )
}