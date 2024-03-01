import React, { useState } from 'react'
import UseState from './Components/UseState'
import "./app.css"

export const ToggleTheme = React.createContext();

const App=() => {
  
  let [themestate,setThemestate]=useState(true);

  const handleToggle=()=>{
    setThemestate(!themestate)
  }

  return(
    <>
    <ToggleTheme.Provider value={themestate}>
      <button className='toggle' onClick={handleToggle}>Toggle</button>
      <UseState/>
    </ToggleTheme.Provider>
    </>
  )
}

export default App