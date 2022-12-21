import PropTypes from "prop-types";

import Button from "..";
import classes from "./index.module.css";

const PrimaryButton = (props) => {
    return (
        <Button className={classes.PrimaryButton} {...props}>
            {props.children}
        </Button>
    );
};

PrimaryButton.propTypes = {
    props: PropTypes.shape({
        type: PropTypes.oneOf(["button", "submit", "reset"]),
        className: PropTypes.string,
        onClick: PropTypes.func,
        children: PropTypes.string.isRequired,
        disabled: PropTypes.bool,
    }),
};

export default PrimaryButton;
