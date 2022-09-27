import { useContext } from "react";
import { DarkModeContext } from "../Context/LightModeContext";
import "./Background.css";

function Background(props) {
  const { lightMode } = useContext(DarkModeContext);
  return (
    <div className={!lightMode ? "background" : "light-background"}>
      {props.children}
    </div>
  );
}

export default Background;
