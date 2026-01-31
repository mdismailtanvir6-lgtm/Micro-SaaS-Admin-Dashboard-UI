import React from "react";
import { useTheme } from "./ThemeContext";
import { IoMoonSharp, IoSunny } from "react-icons/io5";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  return (
    <button className="m-2 float-end cursor-pointer" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      {theme === "light" ? (
        <span>
          <IoMoonSharp />
        </span>
      ) : (
        <span>
          <IoSunny />
        </span>
      )}
    </button>
  );
};

export default ThemeToggle;
