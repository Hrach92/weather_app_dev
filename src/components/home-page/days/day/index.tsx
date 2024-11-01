import { WeatherData } from 'types/types';
import styles from './styles.module.scss'
import { currentChecker, dateConverter, generateIcon, tempConverter } from 'utils';
import { useSelector } from 'react-redux';
import { selectWeatherData } from 'store/reducers/weather';

const Day = ({ day }: { day: WeatherData }): React.JSX.Element => {
  const { unit, current } = useSelector(selectWeatherData)

  const { dt } = day
  const { main, weather } = day
  const icon = weather?.[0].icon || ''
  const getIcon = generateIcon(icon)

  const temp = tempConverter(main?.temp, unit)
  const date = dateConverter(dt)

  const isCurrent = currentChecker(current.dt, date)

  return <div className={isCurrent?styles.activeContainer:styles.container}>
    <span className={styles.date}>{date}</span>
    <div>
      <span className={styles.temp}>{temp}</span>
      <img src={getIcon} alt='weather icon' className={styles.img} />
    </div>
  </div>
};
export default Day;
