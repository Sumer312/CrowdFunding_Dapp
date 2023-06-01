import React, { useEffect, useState } from "react";
import { BallTriangle } from "react-loader-spinner";
import useThemeStore from "./themeStore/themeStore";

const Loader = () => {
  const theme = useThemeStore((state) => state.theme);
  const [stateTheme, setStateTheme] = useState(theme);
  useEffect(() => {
    setStateTheme(theme);
  }, [theme]);
  return (
    <BallTriangle
      height={100}
      width={100}
      radius={5}
      color={stateTheme === 1 ? "#f0abfc" : "#581c87"}
      ariaLabel='ball-triangle-loading'
      wrapperClass={{}}
      wrapperStyle=''
      visible={true}
    />
  );
};

export default Loader;
