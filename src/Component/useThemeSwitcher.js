import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const useThemeSwitcher = () => {
    const preferDarkQuery = "(prefer-color-scheme: dark)"
    const[mode, setMode] = useState("");
    useEffect(() => {
        const mediaQuery =window.matchMedia(preferDarkQuery);
        const usePref = window.localStorage.getItem("theme")
         
        const handleChange = () => {
            if(usePref){
                let cheack = usePref === "dark" ? "dark" : "light";
                setMode(cheack);
                if(cheack === "dark"){
                    document.documentElement.classList.add("dark")
                }else{
                    document.documentElement.classList.remove("dark")

                }
            }else{
                let cheack = mediaQuery.matches ? "dark" : "light";
                setMode(cheack);
                if(cheack === "dark"){
                    document.documentElement.classList.add("dark")
                }else{
                    document.documentElement.classList.remove("dark")
                }

            }
        }
        handleChange();

mediaQuery.addEventListener("change",handleChange)

return () => mediaQuery.removeEventListener("change",handleChange)

    },[])

useEffect(() => {
    if(mode === "dark"){
        window.localStorage.setItem("theme", "dark");
        document.documentElement.classList.add("dark")
    }
    
    if( mode === "light"){
        window.localStorage.setItem("theme","light")
        document.documentElement.classList.remove("dark")
    }
},[mode])



  return [mode, setMode]
}

export default useThemeSwitcher