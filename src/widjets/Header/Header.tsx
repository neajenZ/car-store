import styles from './Header.module.css'

import { useNavigate } from 'react-router-dom'

import { BurgerIcon } from '../../shared/icons/BurgerIcon'
import { FavoriteIcon } from '../../shared/icons/FavoriteIcon'
import { Button } from '../../shared/ui/Button/Button'

export const Header = () => {
    const navigate = useNavigate()

    return (
        <header className={styles.header}>
            <div className='container'>
                <div className={styles.wrapper}>
                    <div className={styles.left}>
                        <img src="/logo.svg" alt="" />
                        <Button 
                            onClick={() => navigate('/')} 
                            text='Каталог' 
                            rootClass={styles.catalogBtn} 
                            icon={<BurgerIcon />} 
                            iconPosition='left' 
                        />
                    </div>
                    <div className={styles.right}>
                        <div className={styles.contacts}>
                            <p>Москва, Волгоградский пр-кт, 43, стр 1</p>
                            <p>+7 800 555 35 35</p>
                        </div>
                        <Button 
                            onClick={() => navigate('/favorites')} 
                            styleType='link' 
                            text='Избранное' 
                            icon={<FavoriteIcon variant='hover' />} 
                            iconPosition='left' 
                            rootClass={styles.favoriteLink} 
                        />
                    </div>
                </div>

            </div>
        </header>
    )
}