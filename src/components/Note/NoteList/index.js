import PropTypes from "prop-types";
import NoteItem from "../NoteItem";
import Empty from "../../ErrorDisplay/Empty";

import classes from "./index.module.css";

const NoteList = ({ notes, onArchive, onDelete }) => {
    if (notes.length === 0) {
        return <Empty />;
    }

    return (
        <div className={classes.NoteList}>
            {notes.map((note) => (
                <NoteItem
                    key={note.id}
                    id={note.id}
                    title={note.title}
                    date={note.createdAt}
                    body={note.body}
                    archived={note.archived}
                    onArchive={onArchive}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
};

NoteList.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.object).isRequired,
    onArchive: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default NoteList;
