import { useSelector } from 'react-redux';
import styles from './styles.module.scss'
import { selectWeatherData } from 'store/reducers/weather';
import { generateIcon, tempConverter } from 'utils';
import Hours from '../hours';

const Current = (): React.JSX.Element => {
  const { current, unit } = useSelector(selectWeatherData)
  const { name, weather, main } = current
  const desc = weather?.[0].description || ''
  const icon = weather?.[0].icon || ''
  const getIcon = generateIcon(icon)

  const temp = tempConverter(main?.temp, unit)


  return <main className={styles.main}>
    <div className={styles.container}>
      <span className={styles.city}>{name}</span>
      <span className={styles.tem}>{temp}</span>
      <img src={getIcon} alt='weather icon' className={styles.img} />
      <span className={styles.desc}>{desc}</span>
    </div>
    <Hours />
  </main>
};
export default Current;
