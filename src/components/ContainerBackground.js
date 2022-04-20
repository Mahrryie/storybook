import React from 'react';
import '../styles/ContainerBackground.css';
import '../styles/reset.css';
import PropTypes from 'prop-types';

const ContainerBackground = ({children, containerClass = 'background-theme', grandContent, backgroundColor}) => {
    let bgGrayColor;

    if (backgroundColor == 'primary') {
        bgGrayColor = '#082EB5';
    } else if (backgroundColor == 'secondary') {
        bgGrayColor = '#006A70';
    } else if (backgroundColor == 'tertiary') {
        bgGrayColor = '#73004c';
    } else if (backgroundColor == 'quaternary') {
        bgGrayColor = '#59068c';
    } else if (containerClass == 'background-light-gray') {
        bgGrayColor = '#C4C4C4';
    } else if (containerClass == 'null') {
        bgGrayColor = 'inherit';
    }
    
    return (
        <div className={`section-background ${containerClass}`} style={{backgroundColor: bgGrayColor}}>
            <div className='container'>
                {children}
            </div>
            {grandContent}
        </div>
    );
};

export default ContainerBackground;

ContainerBackground.propTypes = {
    containerClass: PropTypes.string,
    backgroundColor: PropTypes.string,
}

ContainerBackground.defaultProps = {
    backgroundColor: '',
    containerClass: '',
};
