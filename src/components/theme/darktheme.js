import React,{ createContext, useState } from "react";

// "theme" değerini diğer componentlerde kullanmak için context hookunu kullanıyoruz 
 const ThemeContext = createContext();

export const  DarkTheme = ({children})=>{

  // Bir çok componentte kullanıcağımız "theme" değeri 
  const [theme,setTheme] = useState("Dark")
  const values = {theme,setTheme}
  
  return (
    // Provider ile hooku tutacağı ve diğer componentlere dağıtacağı dataları bildiriyoruz
      <ThemeContext.Provider value={values}>
        {children}
      </ThemeContext.Provider>
  );
}

export default ThemeContext