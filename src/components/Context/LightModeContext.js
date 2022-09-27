import { createContext, useState } from "react";

const DarkModeContext = createContext();

function DarkModeProvider(props) {
  const [lightMode, setLightMode] = useState(false);

  const toggleDarkMode = () => {
    setLightMode(!lightMode);
  };
  return (
    <>
      <DarkModeContext.Provider value={{ lightMode, toggleDarkMode }}>
        {props.children}
      </DarkModeContext.Provider>
    </>
  );
}

export { DarkModeContext, DarkModeProvider };
