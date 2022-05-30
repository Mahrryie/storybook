import React from 'react';
import PropTypes from 'prop-types';

import Accordion from './accordion/Accordion';

const AccordionImageGrid = ({items, imageName, sectionClass = '', colorScheme = 'primary'}) => {
    return (
        <div className={`section main-grid accordion-image ${sectionClass} ${colorScheme}-scheme`}>
            <div className='halved-content-item'>
                <Accordion items={items}/>
            </div>
            <div className='halved-image-item'>
                <div className='gatsby-image-wrapper clear-top-padding inner-image'>
                    <img src={imageName} />
                </div>
            </div>
        </div>
    );
};

export default AccordionImageGrid;

AccordionImageGrid.propTypes = {
    items: PropTypes.array,
    imageName: PropTypes.string,
    sectionClass: PropTypes.string,
    colorScheme: PropTypes.string,
}

AccordionImageGrid.defaultProps = {
    items: [],
    imageName: '',
    sectionClass: '',
    colorScheme: 'primary'
};

