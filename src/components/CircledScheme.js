import React from 'react';
import PropTypes from 'prop-types';

const CircledScheme = ({items, innerTitle, children, containerClass = '', colorScheme = 'primary'}) => {
    return (
        <div className={`desktop-tablet-only scheme-circled scheme-circled-${items.length} ${containerClass} ${colorScheme}-scheme`}>
            {children}
            {items.map(({text}) => (
                <div className='svg-border-gradient svg-circle'>
                    <p className='svg-circle-text'>{text}</p>
                </div>
            ))}
            <p className='scheme-circled-inner-title'>{innerTitle}</p>
        </div>
    );
};

export default CircledScheme;

CircledScheme.propTypes = {
    items: PropTypes.array,
    innerTitle: PropTypes.string,
    children: PropTypes.element,
    containerClass: PropTypes.string,
    colorScheme: PropTypes.string,
}

CircledScheme.defaultProps = {
    items: [],
    innerTitle: '',
    children: null,
    containerClass: '',
    colorScheme: 'primary'
};

