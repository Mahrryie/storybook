import React from 'react';
import PropTypes from 'prop-types';
import '../styles/index.scss';
import Cat from '../assets/cat.jpg';

const ContainerTwoColumnsOutstanding = ({
    leftContent,
    rightContent,
    containerClass = '',
    containerSmall = true,
    gatsbyImgWayOut = false}) => {
    return (
        <div className={`section ${containerClass}`}>
            <div className='main-grid-outstanding'>
                <div className='main-grid-outstanding-item-left'>
                    {leftContent}
                </div>
                <div className='main-grid-outstanding-item-right'>
                    {gatsbyImgWayOut ? <img src={Cat}/> : <div className={containerSmall ? 'container-small' : ''}>
                        {rightContent} </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default ContainerTwoColumnsOutstanding;

ContainerTwoColumnsOutstanding.propTypes = {
    leftContent: PropTypes.element,
    rightContent: PropTypes.element,
    containerClass: PropTypes.string,
    containerSmall: PropTypes.bool,
    gatsbyImgWayOut: PropTypes.bool,
}

ContainerTwoColumnsOutstanding.defaultProps = {
    leftContent: Element,
    rightContent: Element,
    containerClass: '',
    containerSmall: true,
    gatsbyImgWayOut: false,
}
