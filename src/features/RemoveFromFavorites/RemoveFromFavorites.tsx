import styles from './RemoveFromFavorites.module.css'

import { useAppDispatch } from '../../shared/hooks/reduxHooks'

import { DeleteIcon } from '../../shared/icons/DeleteIcon'
import { removeFromFavorites } from '../../shared/slice/mainSlice'
import { Button } from '../../shared/ui/Button/Button'

import { IProps } from './model'

export const RemoveFromFavorites = ({ carId }: IProps) => {
    const dispatch = useAppDispatch()

    const handleDelete = () => dispatch(removeFromFavorites(carId))

    return (
        <Button onClick={handleDelete} rootClass={styles.deleteBtn} iconPosition='left' styleType='danger' icon={<DeleteIcon />} />
    )
}