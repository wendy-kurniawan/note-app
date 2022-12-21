import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import {
    deleteNote,
    getArchivedNotes,
    unarchiveNote,
} from "../utils/network-data";

import NoteList from "../components/Note/NoteList";
import SearchBar from "../components/Search/SearchBar";
import Loading from "../components/UI/Loading";

const ArchivePage = () => {
    const [notes, setNotes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get("keyword") || "";

    useEffect(() => {
        const fetchNotes = async () => {
            setIsLoading(true);
            const { error, data } = await getArchivedNotes();
            setIsLoading(false);
            if (error) return;
            setNotes(data);
        };

        fetchNotes();
    }, []);

    const handleUnarchive = async (id) => {
        setIsLoading(true);

        await unarchiveNote(id);
        const { data } = await getArchivedNotes();

        setIsLoading(false);
        setNotes(data);
    };

    const handleDelete = async (id) => {
        setIsLoading(true);

        await deleteNote(id);
        const { data } = await getArchivedNotes();

        setIsLoading(false);
        setNotes(data);
    };

    const handleKeywordChange = (keyword) => {
        setSearchParams({ keyword });
    };

    const filteredNotes = notes.filter((note) =>
        note.title.toLowerCase().includes(keyword.toLowerCase())
    );

    return (
        <>
            <SearchBar onChange={handleKeywordChange} keyword={keyword} />
            {isLoading && <Loading />}
            {!isLoading && (
                <NoteList
                    notes={filteredNotes}
                    onArchive={handleUnarchive}
                    onDelete={handleDelete}
                />
            )}
        </>
    );
};

export default ArchivePage;
