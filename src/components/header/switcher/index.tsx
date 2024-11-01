import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectWeatherData, setUnit } from 'store/reducers/weather';
import styles from './styles.module.scss'

const Switcher = (): JSX.Element => {
const {unit} = useSelector(selectWeatherData)
const dispatch = useDispatch()

  const handleUnitChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setUnit(event.target.value));
  };

  return (
    <div className={styles.container}>
      <label>
        <input
          type="radio"
          value="Celsius"
          checked={unit === 'Celsius'}
          onChange={handleUnitChange}
        />
        C
      </label>
      <label>
        <input
          type="radio"
          value="Fahrenheit"
          checked={unit === 'Fahrenheit'}
          onChange={handleUnitChange}
        />
        F
      </label>
    </div>
  );
};

export default Switcher;
