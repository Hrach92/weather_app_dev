import { useSelector } from 'react-redux';
import styles from './styles.module.scss'
import { selectWeatherData } from 'store/reducers/weather';
import { generateIcon, hourConverter, tempConverter } from 'utils';

const Hour = ({ hour }: any): React.JSX.Element => {
  const { unit } = useSelector(selectWeatherData)
  const { weather, main } = hour
  const icon = weather?.[0].icon || ''
  const getIcon = generateIcon(icon)

  const temp = tempConverter(main?.temp, unit)
  const time = hourConverter(hour.dt_txt)

  return <div className={styles.container}>
    <span className={styles.city}>{time}</span>
    <span className={styles.temp}>{temp}</span>
    <img src={getIcon} alt='weather icon' className={styles.img} />
  </div>
};
export default Hour;
