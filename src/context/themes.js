'use client'
import { createContext, useState } from 'react'

const themes = {
    dark: {
        backgroundColor: '#4A4A4A',
        color: 'white',
        greyColor: '#707070',
    },

    light: {
        backgroundColor: '#f0f2f2',
        color: '#BCBCBC',
        greyColor: '#A9A9A9',
    }
}

export const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {
    const [isDark, setIsDark] = useState(true)
    const theme = isDark? themes.dark : themes.light;

    const toggleTheme = () => {
        setIsDark(!isDark)
    }

    return(
        <ThemeContext.Provider value={[ {theme, isDark} , toggleTheme]}>
            {children}
        </ThemeContext.Provider>
    )
}