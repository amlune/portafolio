'use client';

import { useState, useEffect } from "react";

type ThemeMode = "light" | "dark";

export const useDarkMode = () => {
    const [theme, setTheme] = useState<ThemeMode>("light");
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        // Always start in light mode, but you can still read saved preference if you want
        // const savedTheme = localStorage.getItem('theme');
        // if (savedTheme === 'dark' || savedTheme === 'light') {
        //     setTheme(savedTheme as ThemeMode);
        // }
    }, []);

    useEffect(() => {
        if (isClient) {
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
        }
    }, [theme, isClient]);

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
    };

    return [theme, toggleTheme] as const;
}
