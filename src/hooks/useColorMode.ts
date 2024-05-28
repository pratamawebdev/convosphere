import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

type ColorMode = "light" | "dark";

export default function useColorMode(): [ColorMode, (mode: ColorMode) => void] {
  const [colorMode, setColorMode] = useLocalStorage<ColorMode>(
    "color-mode",
    "light"
  );

  useEffect(() => {
    const className = "dark";
    const setDark = document.documentElement.classList;

    if (colorMode === "dark") {
      setDark.add(className);
    } else {
      setDark.remove(className);
    }
  }, [colorMode]);

  return [colorMode, setColorMode];
}
