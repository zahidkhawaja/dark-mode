import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = () => {
    const [value, setValue] = useLocalStorage("darkmode", true);

    useEffect(() => {

        return value ? document.body.classList.add("dark-mode") : document.body.classList.remove("dark-mode");

    }, [value]);

    return [value, setValue];

}