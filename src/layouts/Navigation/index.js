import React from "react";
import { Link } from "react-router-dom";
import {
    FiArchive,
    FiLogIn,
    FiLogOut,
    FiMoon,
    FiPlusSquare,
    FiSun,
    FiUserPlus,
} from "react-icons/fi";

import classes from "./index.module.css";
import { useAuth } from "../../contexts/auth-context";
import { useTheme } from "../../contexts/theme-context";
import { useLocale } from "../../contexts/locale-context";
import { navigation } from "../../lang/navigation";

const Navigation = () => {
    const themeContext = useTheme();
    const localeContext = useLocale();
    const authContext = useAuth();

    const notesNavigation = (
        <>
            <li>
                <Link className={classes.Link} to="/notes">
                    <FiArchive />
                    <span>{navigation[localeContext.locale].notes}</span>
                </Link>
            </li>
            <li>
                <Link className={classes.Link} to="/notes/new">
                    <FiPlusSquare />
                    <span>{navigation[localeContext.locale].new}</span>
                </Link>
            </li>
            <li>
                <button
                    onClick={authContext.onLogout}
                    className={classes.Link}
                    to="/notes/new"
                >
                    <FiLogOut />
                    <span>{navigation[localeContext.locale].logout}</span>
                </button>
            </li>
        </>
    );

    const authNavigation = (
        <>
            <li>
                <Link className={classes.Link} to="/login">
                    <FiLogIn />
                    <span>{navigation[localeContext.locale].login}</span>
                </Link>
            </li>
            <li>
                <Link className={classes.Link} to="/register">
                    <FiUserPlus />
                    <span>{navigation[localeContext.locale].register}</span>
                </Link>
            </li>
        </>
    );

    return (
        <nav className={classes.Navigation}>
            <ul>
                {authContext.user ? notesNavigation : authNavigation}
                <li>
                    <button
                        onClick={themeContext.onToggle}
                        className={classes.Link}
                    >
                        {themeContext.theme === "light" ? (
                            <FiMoon />
                        ) : (
                            <FiSun />
                        )}
                    </button>
                </li>
                <li>
                    <button
                        onClick={localeContext.onToggle}
                        className={classes.Link}
                    >
                        {localeContext.locale === "id" ? "ID" : "EN"}
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
