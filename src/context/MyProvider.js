import { useEffect, useState } from "react";
import context from "./MyContext";

function MyProvider({children}) {
  const getSavedState = () => {
    return JSON.parse(localStorage.getItem('portfolio'))?.lightMode;
  }

  const [lightMode, setLightMode] = useState(getSavedState() || false);

  const values = {lightMode, setLightMode};

  useEffect(() => {
    lightMode ? document.body.classList.remove('dark') : document.body.classList.add('dark');
    localStorage.setItem('portfolio', JSON.stringify({lightMode}));
  }, [lightMode]);

  return (
    <context.Provider value={values}>
      {children}
    </context.Provider>
  )
}

export default MyProvider;