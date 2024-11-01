import { useSelector } from 'react-redux';
import styles from './styles.module.scss'
import { selectWeatherData } from 'store/reducers/weather';
import { Fragment } from 'react/jsx-runtime';
import Hour from './hour';

const Hours = (): React.JSX.Element => {
  const { hours } = useSelector(selectWeatherData)

  return <div className={styles.container}>
    {hours.map((hour: any) => {
      return <Fragment key={hour.dt}><Hour hour={hour} /></Fragment>
    })}
  </div>
};
export default Hours;
