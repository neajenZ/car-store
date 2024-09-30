import styles from './Cars.module.css'

import { useQuery } from "@apollo/client";
import { FC, useMemo, useState } from "react";

import { Search } from "../../features/Search";
import { CarList } from "../../widjets/CarList";
import { GET_CARS } from "../../shared/api/queries";

import { Car } from "../../graphql/generated";
import { Filter, IFilterType } from "../../features/Filter";

type IResponse = { cars: Car[] }

const Cars: FC = () => {
  const [filter, setFilter] = useState<IFilterType>('available')
  const { loading, data } = useQuery<IResponse>(GET_CARS);
  
  const preparedData = useMemo(() => {
    if (data && data.cars) {
      switch (filter) {
        case 'cheap':
          return [...data.cars].sort((a, b) => Number(a.price.replace('$', '')) - Number(b.price.replace('$', '')))
        case 'higher':
          return [...data.cars].sort((a, b) => Number(b.price.replace('$', '')) - Number(a.price.replace('$', '')))
        case 'asc': 
          return [...data.cars].sort((a, b) => a.model.localeCompare(b.model))
        case 'desc': 
          return [...data.cars].sort((a, b) => a.model.localeCompare(b.model)).reverse()
        case 'old': 
          return [...data.cars].sort((a, b) => a.model_year - b.model_year)
        case 'new': 
          return [...data.cars].sort((a, b) => b.model_year - a.model_year)
        default:
          return data?.cars
      }
    } 
    
  }, [data, filter])

  return (
    <div className="container">
      <div className={styles.header}>
        <Filter onChange={setFilter} />
        <Search />
      </div>
      
      { !loading && preparedData && <CarList data={preparedData} /> }
    </div>
  );
};

export default Cars;
