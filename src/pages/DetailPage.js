import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import NoteDetail from "../components/Note/NoteDetail";
import Loading from "../components/UI/Loading";
import { RouteKey } from "../router/RouteKey";
import { getNote } from "../utils/network-data";

const DetailPage = () => {
    const { id } = useParams();
    const [note, setNote] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        getNote(id)
            .then(({ error, data }) => {
                if (error) {
                    throw error;
                }
                setNote(data);
            })
            .catch((error) => setError(error));
    }, [id]);

    if (error) return <Navigate to={RouteKey.error.notFound} replace />;
    if (note == null && !error) return <Loading />;

    const { title, createdAt: date, body } = note;
    return <NoteDetail title={title} date={date} body={body} />;
};

export default DetailPage;
