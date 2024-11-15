import React from "react";
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";

function Toggle_Theme() {
  const [dark, setDark] = React.useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  return (
    <div
      className="bg-stone-600 border border-stone-300 rounded-full flex 
    justify-center items-center z-10 hover:scale-105 active:scale-95
    dark:bg-yellow-400 dark:border-stone-200"
    >
      <button onClick={() => darkModeHandler()}>
        {dark && <IoSunny className="w-8 h-8 p-2 fill-white dark:fill-white" />}
        {!dark && <IoMoon className="w-8 h-8 p-2 fill-white dark:fill-white" />}
      </button>
    </div>
  );
}

export default Toggle_Theme;
