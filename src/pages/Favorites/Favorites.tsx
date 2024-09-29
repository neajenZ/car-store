import styles from './Favorites.module.css'

import { useAppSelector } from '../../shared/hooks/reduxHooks';

import { FavoriteCarsList } from '../../widjets/FavoriteCarList';


const FavoritesPage = () => {
  const { favorites } = useAppSelector(state => state.mainStore)
  
  return (
    <div className="container">
        <div className={styles.header}>
          <p>Избранные товары — {favorites.length === 1 ? '1 позиция' : favorites.length > 1 && favorites.length < 5 ? `${favorites.length} позиции` : `${favorites.length} позиций`}</p>
        </div>
        <FavoriteCarsList />
      </div>
  )
};

export default FavoritesPage;
