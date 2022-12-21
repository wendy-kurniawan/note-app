import PropTypes from "prop-types";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const Locale = createContext({
    locale: "light",
    onToggle: () => {},
});

const useLocale = () => useContext(Locale);

const LocaleProvider = ({ children }) => {
    const [locale, setLocale] = useState("id");

    useEffect(() => {
        const locale = localStorage.getItem("locale") || "id";
        setLocale(locale);
    }, []);

    const handleToggle = () => {
        setLocale((l) => {
            const newLocale = l === "id" ? "en" : "id";
            localStorage.setItem("locale", newLocale);
            return newLocale;
        });
    };

    const contextValue = useMemo(
        () => ({
            locale,
            onToggle: handleToggle,
        }),
        [locale]
    );

    return <Locale.Provider value={contextValue}>{children}</Locale.Provider>;
};

LocaleProvider.propTypes = {
    children: PropTypes.element.isRequired,
};

export { useLocale, LocaleProvider };
