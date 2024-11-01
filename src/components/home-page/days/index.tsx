import { selectWeatherData } from 'store/reducers/weather';
import styles from './styles.module.scss'
import { useSelector } from 'react-redux';
import { Fragment } from 'react/jsx-runtime';
import Day from './day';
import { WeatherData } from 'types/types';

const Days = (): React.JSX.Element => {
  const {days} = useSelector(selectWeatherData)

  return <div className={styles.container}>
    {days.map((day:WeatherData)=>{
      return <Fragment key={day.dt}>
        <Day day={day}/>
      </Fragment>
    })}
  </div>
};
export default Days;
