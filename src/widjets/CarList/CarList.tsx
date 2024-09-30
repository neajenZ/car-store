import styles from './CarList.module.css'

import { CarCard } from '../../entities/Car'

import { IProps } from './model'

export const CarList = ({ data }: IProps) => {
    return (
        <div className={styles.wrapper}>
            {
                data.map((i) => (
                    <CarCard key={i.id} data={i} />
                ))
            }
        </div>
    )
}
