import React from "react";
import { NavLink } from "react-router-dom";

import { useLocale } from "../../contexts/locale-context";
import { tab } from "../../lang/tab";

import classes from "./index.module.css";

const Tab = () => {
    const { locale } = useLocale();
    const activeLink = classes.Active;

    return (
        <div className={classes.Tab}>
            <NavLink
                to="/notes"
                end
                className={({ isActive }) =>
                    `${classes.TabItem} ${isActive ? activeLink : null}`
                }
            >
                {tab[locale].active}
            </NavLink>
            <NavLink
                to="/notes/archived"
                className={({ isActive }) =>
                    `${classes.TabItem} ${isActive ? activeLink : null}`
                }
            >
                {tab[locale].archived}
            </NavLink>
        </div>
    );
};

export default Tab;
