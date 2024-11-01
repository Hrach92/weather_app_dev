import Current from "components/home-page/current";
import Days from "components/home-page/days";
import React from "react";

import styles from './styles.module.scss'
import { useSelector } from "react-redux";
import { selectWeatherData } from "store/reducers/weather";

const HomePage = (): React.JSX.Element => {
  const { current } = useSelector(selectWeatherData)

  return <div className={styles.main}>
    {current ? <>
      <Current />
      <Days />
    </> : "Loading..."}
  </div>;
};
export default HomePage;
