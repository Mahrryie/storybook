import React from 'react';
import PropTypes from 'prop-types';

const Button = ({colorScheme = 'primary', text = 'Contact us'}) => {
    return (
        <div className={`${colorScheme}-scheme`}>
            <a className='main-navigation-link link-button' href='/contacts'>
                {text}
            </a>
        </div>
    );
};

export default Button;

Button.propTypes = {
    colorScheme: PropTypes.string,
    text: PropTypes.string,
}

Button.defaultProps = {
    colorScheme: 'primary',
    text: 'Contact us'
};
