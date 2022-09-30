import { FC } from 'react'
import styles from './Filters.module.scss'

const cities =[
  {location: 'Paris'},
  {location: 'Bora Bora'},
  {location: 'Maui'},
  {location: 'Tahit'},
  {location: 'Berlin'},
  {location: 'Munhen'},
]


const Filters: FC = () => {
  return (
    <div className={styles.wrapper}>
      {cities.map(city => 
        (<button key={city.location}>{city.location}</button>)  
      )}
    </div>
  )
}

export default Filters