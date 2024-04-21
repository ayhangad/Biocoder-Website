import React from 'react'
import PropTypes from 'prop-types'

const Button = ({
    type,
    innerText,
    iconR,
    iconL,
    onClick,
    disabled
}) => {
    return (
        <button
            className={`${type}`}
            onClick={onClick}
            disabled={disabled}
        >
            <i className={`ri-${iconL}-line`}></i>
            {
                innerText && (
                    <span className="label-wrapper">
                        {innerText}
                    </span>
                )
            }
            <i className={`ri-${iconR}-line`}></i>
        </button>
    )
}
Button.defaultProps = {
    type: 'primary',
    innerText: null,
    iconR: '',
    iconL: '',
    disabled: false,
}

Button.propTypes = {
    type: PropTypes.string,
    innerText: PropTypes.string,
    iconR: PropTypes.string,
    iconL: PropTypes.string,
    onclick: PropTypes.func,
    disabled: PropTypes.bool,


}

export default Button