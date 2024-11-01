import React, { memo } from "react";
import Header from "../header";
import Modal from "components/modal";
import { useSelector } from "react-redux";
import { selectWeatherData } from "store/reducers/weather";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const {infoModalOpened} = useSelector(selectWeatherData)

  return (
    <>
      <Header />
      {children}
      {infoModalOpened&&<Modal/>}
    </>
  );
};
export default memo(Layout);
