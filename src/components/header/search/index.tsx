import { useEffect } from "react";
import styles from './styles.module.scss'
import useOnChange from "hooks/useOnChange";
import getWeather from "requests/getWeather";
import { useDispatch, useSelector } from "react-redux";
import { onToggleInfoModal, selectWeatherData, setWeatherData } from "store/reducers/weather";
import getWeatherByApiKey from "requests/getWeatherByDays";

const Search = (): React.JSX.Element => {
  const { value, onChange } = useOnChange()
  const { current } = useSelector(selectWeatherData)
  const dispatch = useDispatch()

  const fetchData = async (text = 'Yerevan') => {
    const searchValue = value || text
    try {
      const [{ data: current }, { data: { list } }] = await Promise.all([getWeather(searchValue), getWeatherByApiKey(searchValue)])
      dispatch(setWeatherData({ current, list }));
    } catch (err) {
      dispatch(onToggleInfoModal(true));
      console.log(err, 'err');
    }
  }

  useEffect(() => {
    if (!current) {
      fetchData()
    }
  }, [current])

  const handleChange = async (e: any) => {
    if (e.key === 'Enter') {
      await fetchData()
    }
    onChange(e)
  }


  return <div className={styles.container}>
    <input value={value} className={styles.input} onChange={handleChange} />
    <button onClick={() => fetchData(value)}>Search City</button>
  </div>
};
export default Search
