import React,{ createContext, useState } from "react";

 const ThemeContext = createContext();

export const  DarkTheme = ({children})=>{

  const [theme,setTheme] = useState("Dark")
  const values = {theme,setTheme}
  
  return (
      <ThemeContext.Provider value={values}>
        {children}
      </ThemeContext.Provider>
  );
}

export default ThemeContext