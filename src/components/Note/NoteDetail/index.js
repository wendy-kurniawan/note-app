import PropTypes from "prop-types";
import parser from "html-react-parser";

import { showFormattedDate } from "../../../utils";

import classes from "./index.module.css";
import { FaCalendarAlt } from "react-icons/fa";
import { useLocale } from "../../../contexts/locale-context";

const NoteDetail = ({ title, date, body }) => {
    const { locale } = useLocale();

    return (
        <section className={classes.NoteDetail}>
            <header className={classes.Header}>
                <h1 className={classes.Heading}>{title}</h1>
                <small className={classes.Date}>
                    <span>
                        <FaCalendarAlt />
                    </span>
                    <span>{showFormattedDate(date, locale)}</span>
                </small>
            </header>
            <main>
                <p className={classes.Body}>{parser(body)}</p>
            </main>
        </section>
    );
};

NoteDetail.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
};

export default NoteDetail;
