import './PageHeader.css';
//  import { useState } from "react";
// import {FaMoon} from "react-icons/fa";
// import { FaSun } from 'react-icons/fa';
// import HeaderTitle from './HeaderTitle';


function ThemeSwitcher({isDarkTheme, onChangeTheme}) {
   

    const styleHighlighted = {backgroundColor: "grey"}
    const darkStyle = isDarkTheme==true ? styleHighlighted : {} 
    const lightStyle = isDarkTheme==false ? styleHighlighted : {}


    return <div>
    <button className='button' style={darkStyle} onClick={() => onChangeTheme(false)}>Light</button>
    <button className='button' style={lightStyle} onClick={() => onChangeTheme(true)}>Dark</button>
    </div>
    
    
}
export default ThemeSwitcher;