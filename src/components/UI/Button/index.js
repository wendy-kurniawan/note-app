import PropTypes from "prop-types";

import classes from "./index.module.css";

const Button = (props) => {
    return (
        <button
            type={props.type || "button"}
            className={`${classes.button} ${props.className}`}
            onClick={props.onClick}
            disabled={props.disabled || false}
        >
            {props.children}
        </button>
    );
};

Button.propTypes = {
    props: PropTypes.shape({
        type: PropTypes.oneOf(["button", "submit", "reset"]),
        className: PropTypes.string,
        onClick: PropTypes.func,
        disabled: PropTypes.bool,
    }),
};

export default Button;
