import { useEffect, useState } from "react";
import context from "./MyContext";

function MyProvider({children}) {
  const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem('darkMode')) || false);

  const values = {darkMode, setDarkMode};

  useEffect(() => {
    darkMode ? document.body.classList.add('dark') : document.body.classList.remove('dark');
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <context.Provider value={values}>
      {children}
    </context.Provider>
  )
}

export default MyProvider;