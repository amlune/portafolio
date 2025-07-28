'use client';

import { useState, useEffect } from "react";

type ThemeMode = "light" | "dark";

export const useDarkMode = () => {
    const [theme, setTheme] = useState<ThemeMode>(() =>{
        const savedTheme = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
        return (savedTheme as ThemeMode) || "light";
    });

    useEffect(() =>{
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
    };

    return [theme, toggleTheme] as const;
}
