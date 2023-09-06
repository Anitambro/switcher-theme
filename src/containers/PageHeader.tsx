import { useState } from "react";
import ThemeSwitcher from "../components/ThemeSwitcher";
import ThemeIcon from "../components/ThemeIcon";
import HeaderTitle from "../components/HeaderTitle";

function PageHeader() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  function onChangeTheme(status: boolean) {
    setIsDarkTheme(status);
  }

  return (
    <>
      <ThemeSwitcher
        isDarkTheme={isDarkTheme}
        onChangeTheme={onChangeTheme}
      />
      <HeaderTitle></HeaderTitle>
      <ThemeIcon isDarkTheme={isDarkTheme}></ThemeIcon>
    </>
  );
}

export default PageHeader;

