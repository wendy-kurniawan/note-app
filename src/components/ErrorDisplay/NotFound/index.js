import ErrorDisplay from "..";
import { useLocale } from "../../../contexts/locale-context";
import NotFoundImage from "./NotFoundImage";

import { message } from "../../../lang/message";

const NotFound = () => {
    const { locale } = useLocale();

    return (
        <ErrorDisplay
            image={<NotFoundImage />}
            message={message[locale].notFound}
        />
    );
};

export default NotFound;
