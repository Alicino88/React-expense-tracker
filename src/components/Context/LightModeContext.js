import { createContext, useState } from "react";

const DarkModeContext = createContext();

function DarkModeProvider(props) {
  const [lightMode, setLightMode] = useState(false);

  const toggleMode = () => {
    setLightMode(!lightMode);
    console.log(lightMode);
  };
  return (
    <>
      <DarkModeContext.Provider value={{ lightMode, toggleMode }}>
        {props.children}
      </DarkModeContext.Provider>
    </>
  );
}

export { DarkModeContext, DarkModeProvider };
