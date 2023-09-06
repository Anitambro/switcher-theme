import "./PageHeader.css";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";

function ThemeIcon({isDarkTheme}) {

    console.log("isDarkTheme", isDarkTheme); 

  return (
     <div className="themeSwitcher">
        {
            isDarkTheme ? <FaMoon className="icon"></FaMoon> : <FaSun className="icon"></FaSun>
        }
    </div>
  );
}

export default ThemeIcon;
