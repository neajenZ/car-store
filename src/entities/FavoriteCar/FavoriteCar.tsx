import { RemoveFromFavorites } from '../../features/RemoveFromFavorites'
import { Button } from '../../shared/ui/Button/Button'
import styles from './FavoriteCar.module.css'
import { IProps } from './model'



export const FavoriteCar = ({ data, isLastElement }: IProps) => {

    return (
        <div className={`${styles.body} ${isLastElement ? styles.last : ''}`}>
            <div className={styles.wrapper}>
                <img className={styles.img} src={`${import.meta.env.VITE_API_URL}${data.img_src}`} alt="" />

                <div className={styles.carData}>
                    <h3>{data.brand} {data.model}</h3>
                    <p>{data.description}</p>
                    <p>Год: {data.model_year}</p>
                    <p>Цвет: {data.color}</p>
                    <span className={styles.price}>{data.price}</span>
                    <div className={styles.actions}>
                        <Button rootClass={styles.chooseBtn} text='Выбрать комплектацию' />
                        <RemoveFromFavorites carId={data.id} />
                    </div>
                </div>

                
            </div>
        </div>
    )
}