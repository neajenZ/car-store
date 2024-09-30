import { IOption } from "./model";

export const options_filter: IOption[] = [
    {
        value: 'available',
        label: 'Сначала в наличии'
    },
    {
        value: 'asc',
        label: 'По имени (A-Z)'
    },
    {
        value: 'desc',
        label: 'По имени (Z-A)'
    },
    {
        value: 'old',
        label: 'Сначала старше'
    },
    {
        value: 'new',
        label: 'Сначала новее'
    },
    {
        value: 'cheap',
        label: 'Сначала дешевле'
    },
    {
        value: 'higher',
        label: 'Сначала дороже'
    }
]