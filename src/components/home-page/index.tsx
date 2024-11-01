import Current from "components/home-page/current";
import Days from "components/home-page/days";
import React from "react";

import styles from './styles.module.scss'

const HomePage = (): React.JSX.Element => {

  return <div className={styles.main}>
    <Current />
    <Days />
  </div>;
};
export default HomePage;
