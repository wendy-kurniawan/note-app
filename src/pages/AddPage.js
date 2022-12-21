import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addNote } from "../utils/network-data";

import NoteForm from "../components/Note/NoteForm";
import Loading from "../components/UI/Loading";

const AddPage = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const handleSave = async (note) => {
        setIsLoading(true);
        await addNote(note);
        setIsLoading(false);
        navigate("/notes");
    };

    return isLoading ? <Loading /> : <NoteForm onSave={handleSave} />;
};

export default AddPage;
