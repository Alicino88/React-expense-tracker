import "./ThemeSwitch.css";
import { useContext } from "react";
import { DarkModeContext } from "../Context/LightModeContext";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

function ThemeSwitch() {
  const { lightMode, toggleMode } = useContext(DarkModeContext);
  return (
    <div className={["theme-switch-container"]}>
      {!lightMode && (
        <button className={["button-dark"]} onClick={toggleMode}>
          <span>
            <LightModeIcon className={["icon-style"]} />
          </span>{" "}
          light theme
        </button>
      )}
      {lightMode && (
        <button className={["button-light"]} onClick={toggleMode}>
          <span>
            <DarkModeIcon className={["icon-style"]} />
          </span>
          dark theme
        </button>
      )}
    </div>
  );
}

export default ThemeSwitch;
