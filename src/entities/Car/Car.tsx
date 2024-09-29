import styles from './car.module.css'
import { Button } from '../../shared/ui/Button/Button'
import { AddCarToFavorites } from '../../features/AddToFavorites'
import { IProps } from './model'



export const CarCard = ({ data }: IProps) => {
    
    return (
        <div className={styles.body}>
            <div className={`${styles.imgContainer} ${!data.availability ? styles.notAvailable : ''}`}>
                <img src={`${import.meta.env.VITE_API_URL}${data.img_src}`} alt={`${data.brand} ${data.model}`} />
                {
                    !data.availability && <div className={styles.notAvailableBtn}>Нет в наличии</div>
                }
            </div>

            <div className={styles.carData}>
                <h3>{data.brand} {data.model}</h3>
                <div className={styles.properties}>
                    <p><span>Год:</span>{data.model_year}</p>
                    <p><span>Цвет:</span>{data.color}</p>
                </div>
                <p className={styles.carPrice}>от {data.price}</p>
            </div>
            <div className={styles.actions}>
                <Button disabled={!data.availability} text='Купить' />
                <AddCarToFavorites car={data} />
            </div>
        </div>
    )
}