import PropTypes from "prop-types";

import { FaSearch } from "react-icons/fa";
import { useLocale } from "../../../contexts/locale-context";
import { form } from "../../../lang/form";

import classes from "./index.module.css";

const SearchBar = ({ keyword, onChange }) => {
    const { locale } = useLocale();

    return (
        <form role="search" className={classes.SearchBar}>
            <input
                type="text"
                name="query"
                placeholder={form[locale].field.search}
                onChange={(e) => onChange(e.target.value)}
                value={keyword || ""}
            />
            <FaSearch style={{ color: "var(--color-grey)" }} />
        </form>
    );
};

SearchBar.propTypes = {
    keyword: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default SearchBar;
