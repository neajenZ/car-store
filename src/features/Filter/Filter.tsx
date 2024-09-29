import styles from './Filter.module.css'

import { ChangeEvent } from "react"

import { SortIcon } from "../../shared/icons/SortIcon"
import { options_filter } from "./constants"

import { IFilterType, IProps } from "./model"


export const Filter = ({ onChange }: IProps) => {

    const handleChange = (e: ChangeEvent<HTMLSelectElement> ) => {
        const value = e.target.value as IFilterType
        onChange(value)
    }

    return (
        <div className={styles.wrapper}>
            <SortIcon />
            <select onChange={handleChange} className={styles.select}>
                {
                    options_filter.map((i) => (
                        <option key={i.value} value={i.value}>{i.label}</option>
                    ))
                }
            </select>
        </div>
    )
}


