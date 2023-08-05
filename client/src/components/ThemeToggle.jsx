import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import Wrapper from "../assets/wrappers/ThemeToggle";
import { useState } from "react";
import { useDashboardContext } from '../pages/DashboardLayout';

function ThemeToggle() {
  const { isDarkTheme, toggleDarkTheme } = useDashboardContext();
  return (
    <Wrapper onClick={toggleDarkTheme}>
      {isDarkTheme ? <BsFillSunFill className="toggle-icon"/> :  <BsFillMoonFill />}
    </Wrapper>
  );
}

export default ThemeToggle;
