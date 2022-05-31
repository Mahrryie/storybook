import React from 'react';
import PropTypes from 'prop-types';
import '../styles/index.scss';

const ContainerTwoColumnsBackground = ({
    leftContent,
    rightContent,
    gridClass = 'main-grid',
    invertBackground = false,
    leftClass = '',
    rightClass = '',
    backgroundLightGray = true,
    schemeColor = 'primary-scheme'}) => {
    return (
        <div className={`section two-columns-background ${backgroundLightGray ? 'background-light-gray' : ''} ${gridClass} ${schemeColor}`}>
            <div className={`halved-content-item ${invertBackground ? '' : 'background-theme'} ${leftClass}`}>
                <div className='container-small'>
                    {leftContent}
                </div>
            </div>
            <div className={`halved-content-item ${invertBackground ? 'background-theme' : ''} ${rightClass}`}>
                <div className='container-small'>
                    {rightContent}
                </div>
            </div>
        </div>
    )
    
};

export default ContainerTwoColumnsBackground;

ContainerTwoColumnsBackground.propTypes = {
    leftContent: PropTypes.element,
    rightContent: PropTypes.element,
    gridClass: PropTypes.string,
    invertBackground: PropTypes.bool,
    leftClass: PropTypes.string,
    rightClass: PropTypes.string,
    backgroundLightGray: PropTypes.bool,
    schemeColor: PropTypes.string,
}

ContainerTwoColumnsBackground.defaultProps = {
    leftContent: Element,
    rightContent: Element,
    gridClass: '',
    invertBackground: false,
    leftClass: '',
    rightClass: '',
    backgroundLightGray: true,
    schemeColor: '',
}
