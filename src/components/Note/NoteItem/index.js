import PropTypes from "prop-types";

import { showFormattedDate } from "../../../utils";
import Card from "../../UI/Card";

import IconButton from "../../UI/Button/IconButton";
import parser from "html-react-parser";

import StretchLink from "../../UI/StretchLink";

import classes from "./index.module.css";
import {
    FaBookmark,
    FaCalendarAlt,
    FaRegBookmark,
    FaRegTrashAlt,
} from "react-icons/fa";
import { useLocale } from "../../../contexts/locale-context";

const NoteItem = ({ id, title, date, body, archived, onArchive, onDelete }) => {
    const { locale } = useLocale();

    return (
        <Card className={classes.NoteItem}>
            <header className={classes.Header}>
                <h3 className={classes.Title}>{title}</h3>
                <small className={classes.Date}>
                    <span>
                        <FaCalendarAlt />
                    </span>
                    <span>{showFormattedDate(date, locale)}</span>
                </small>
            </header>
            <div className={classes.Content}>
                <p>{parser(body)}</p>
            </div>
            <footer className={classes.Actions}>
                <IconButton onClick={onArchive.bind(null, id)}>
                    {archived ? <FaBookmark /> : <FaRegBookmark />}
                </IconButton>
                <IconButton onClick={onDelete.bind(null, id)}>
                    <FaRegTrashAlt />
                </IconButton>
            </footer>
            <StretchLink to={`../../notes/${id}`} />
        </Card>
    );
};

NoteItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    archived: PropTypes.bool.isRequired,
    onArchive: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default NoteItem;
