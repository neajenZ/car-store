import { Dispatch, SetStateAction } from "react"

export type IFilterType = 'asc' | 'desc' | 'new' | 'old' | 'higher' | 'cheap' | 'available' 

export type IProps = {
    onChange: Dispatch<SetStateAction<IFilterType>>
}

export type IOption = {
    label: string,
    value: IFilterType
}