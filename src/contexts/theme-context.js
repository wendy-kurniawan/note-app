import PropTypes from "prop-types";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const ThemeContext = createContext({
    theme: "light",
    onToggle: () => {},
});

const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        const theme = localStorage.getItem("theme") || "light";
        setTheme(theme);
    }, []);

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    const handleToggle = () => {
        setTheme((t) => {
            const newTheme = t === "light" ? "dark" : "light";
            localStorage.setItem("theme", newTheme);
            return newTheme;
        });
    };

    const contextValue = useMemo(
        () => ({
            theme,
            onToggle: handleToggle,
        }),
        [theme]
    );

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    );
};

ThemeProvider.propTypes = {
    children: PropTypes.element.isRequired,
};

export { useTheme, ThemeProvider };
