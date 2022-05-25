import React from 'react';
import PropTypes from 'prop-types';

const SubTextImage = ({
    items,
    titleClass = '',
    containerClass = '',
    percents,
    percentsSup = '',
    colorScheme = 'primary' }) => {
    return (
        <div className={`sub-text-image ${containerClass} ${colorScheme}-scheme`}>
            {items.map(({field_title, field_description}, index) => {
                const percent = percents[index];

                return (
                    <div key={field_title} className='sub-text-image-grid'>
                        <div className='sub-text-image-grid-img'>
                            <div className='sub-text-image-grid-wrapper'>
                                <h3>{percent} {percentsSup && <span>{percentsSup}</span>}</h3>
                            </div>
                        </div>
                        <div className='sub-text-image-grid-item'>
                            <p className='sub-text-image-grid-text paragraph-bolder'>{field_description.value}</p>
                            {field_title && <p className={`sub-text-image-grid-title paragraph-bolder ${titleClass}`}>{field_title}</p>}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default SubTextImage;

SubTextImage.propTypes = {
    items: PropTypes.array,
    containerClass: PropTypes.string,
    titleClass: PropTypes.string,
    percents: PropTypes.array,
    percentsSup: PropTypes.string,
    colorScheme: PropTypes.string
}

SubTextImage.defaultProps = {
    items: [],
    containerClass: '',
    titleClass: '',
    percents: [],
    percentsSup: '',
    colorScheme: ''
}
