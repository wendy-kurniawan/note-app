import PropTypes from "prop-types";
import classes from "./index.module.css";

const FormGroup = ({ children }) => {
    return <div className={classes.FormGroup}>{children}</div>;
};

FormGroup.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default FormGroup;
