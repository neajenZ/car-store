import styles from './AddToFavorite.module.css'

import { useEffect, useState } from "react"

import { FavoriteIcon } from "../../shared/icons/FavoriteIcon"
import { useAppDispatch, useAppSelector } from "../../shared/hooks/reduxHooks"
import { addToFavorites } from "../../shared/slice/mainSlice"

import { IProps } from "./model"

export const AddCarToFavorites = ({ car }: IProps) => {
    const [isFavorite, setFavorite] = useState(false)
    const { favorites } = useAppSelector(state => state.mainStore)
    const dispatch = useAppDispatch()

    const handleAdd = () => {
        const isDuplicate = favorites.some((i) => i.id === car.id)
        if (!isDuplicate) dispatch(addToFavorites(car))

    }

    useEffect(() => {
        const isExistInFavorite = favorites.some((i) => i.id === car.id)
        if (isExistInFavorite) setFavorite(true)
        else setFavorite(false)
    }, [favorites])

    return (
        <button disabled={!car.availability} onClick={handleAdd} className={styles.btn}>
            <FavoriteIcon 
                variant={
                    !car.availability ? 
                        'disabled' : 
                            isFavorite
                                ? 'active'
                            : 'default'
                } 
            />
        </button>

    )
}
