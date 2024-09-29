import styles from './FavoriteCarList.module.css'

import { useAppSelector } from "../../shared/hooks/reduxHooks"

import { FavoriteCar } from "../../entities/FavoriteCar"




export const FavoriteCarsList = () => {
    const { favorites } = useAppSelector(state => state.mainStore)
    
    return (
        <div className={styles.wrapper}>
            {
                favorites.map((item, index) => (
                    <FavoriteCar key={item.id} isLastElement={index === (favorites.length - 1)} data={item} />
                ))
            }
        </div>
    )
}