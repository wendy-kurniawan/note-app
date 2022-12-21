import ErrorDisplay from "..";
import { useLocale } from "../../../contexts/locale-context";
import EmptyImage from "./EmptyImage";

import { message } from "../../../lang/message";

const Empty = () => {
    const { locale } = useLocale();

    return (
        <ErrorDisplay image={<EmptyImage />} message={message[locale].empty} />
    );
};

export default Empty;
