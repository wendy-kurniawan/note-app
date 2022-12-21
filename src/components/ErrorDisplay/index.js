import PropTypes from "prop-types";
import classes from "./index.module.css";

const ErrorDisplay = ({ image, message }) => {
    return (
        <div className={classes.Error}>
            <div className={classes.Icon}>{image}</div>
            <p className={classes.Text}>{message}</p>
        </div>
    );
};

ErrorDisplay.propType = {
    image: PropTypes.element.isRequired,
    message: PropTypes.string.isRequired,
};

export default ErrorDisplay;
