import React, { useState } from 'react'
import themeContext from './themeContext'

function ThemeState({children}) {
    const [theme, setTheme] = useState("light");

    const lightMode = ()=>{
        setTheme("light");
    }

    const darkMode = ()=>{
        setTheme("dark");
    }
  return (
    <themeContext.Provider value = {{theme, lightMode, darkMode}}>
        {children}
    </themeContext.Provider>
  )
}

export default ThemeState;