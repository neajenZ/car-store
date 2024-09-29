import styles from './Search.module.css'

import { useLazyQuery } from '@apollo/client';
import { useState } from 'react';
import { client } from '../../shared/api/apolloClient';

import { SearchIcon } from '../../shared/icons/SearchIco'
import { Button } from '../../shared/ui/Button/Button'
import { GET_CARS } from '../../shared/api/queries';

import { Car, QueryCarsArgs } from '../../graphql/generated';

export const Search = () => {
    const [searchValue, setSearchValue] = useState<string>('')
    const [getCars, { called, loading, data }] = useLazyQuery<{ cars: Car[] }, QueryCarsArgs>(GET_CARS);

    const handleSearch = () => {
        getCars({
            variables: {
                search: searchValue
            },
            onCompleted: (fetchedData) => {
                client.writeQuery({
                  query: GET_CARS,
                  data: {
                    cars: fetchedData.cars 
                  }
                });
              }
        })
    }

    return (
        <div className={styles.inputWrapper}>
            <input type="text" onChange={(e) => setSearchValue(e.target.value)} placeholder='Найти авто' />
            <Button onClick={handleSearch} disabled={loading} rootClass={styles.searchBtn} icon={<SearchIcon />} iconPosition='left' />
        </div>
    )
}