import React from 'react';
import PropTypes from 'prop-types';
import '../styles/index.scss';

const ContainerTwoColumns = ({
    leftContent,
    rightContent,
    leftContainerClass = '',
    containerClass = ''}) => {
    return (
        <div className={`section ${containerClass}`}>
            <div className={`main-grid container ${!leftContent ?'has-single' : ''} ${leftContainerClass}`}>
                {leftContent && <div className='main-grid-item item-left'>{leftContent}</div>}
                <div className='main-grid-item item-right'>
                    {rightContent}
                </div>
            </div>
        </div>
    );
};

export default ContainerTwoColumns;

ContainerTwoColumns.propTypes = {
    containerClass: PropTypes.string,
    leftContent: PropTypes.element,
    rightContent: PropTypes.element,
    leftContainerClass: PropTypes.string,
}

ContainerTwoColumns.defaultProps = {
    containerClass: '',
    leftContent: Element,
    rightContent: Element,
    leftContainerClass: '',
}
