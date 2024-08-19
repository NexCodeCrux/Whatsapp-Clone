"use client";

import { useState, useEffect } from "react";
import { WbSunny } from "@mui/icons-material";
import { ModeNight } from "@mui/icons-material";

const Toggle = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
  return (
    <div
      className="flex items-center dark:bg-gray-900 rounded-full shadow-md p-2 cursor-pointer w-[15]px h-8"
      onClick={() => setDarkMode(!darkMode)}
    >
      <ModeNight className="text-gray-200" />
      <WbSunny className=""/>
      <div className="bg-white dark:bg-gray-900 w-full h-6 rounded-full shadow-md transform transition-colors duration-200"></div>
    </div>
  );
};

export default Toggle;
