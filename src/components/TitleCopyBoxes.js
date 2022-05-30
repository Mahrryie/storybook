import React from 'react';
import PropTypes from 'prop-types';

const TitleCopyBoxes = ({
    items,
    backgroundClass = '',
    imageClass = '',
    objectPosition = '',
    colorScheme = 'primary',
    middleRowEven = false}) => {
    return (
        <div className={`title-copy-boxes-container ${middleRowEven ? 'title-copy-boxes-middle-row-even' : ''}`} style={{width: '100%'}}>
        <div className={`title-copy-boxes-type-${items.length} ${backgroundClass} ${colorScheme}-scheme`}>
            {items.map(({field_title, field_description, field_link, relationships = {}, uri, field_image}) => {
                return (
                    <div
                        key={field_title}
                        className={`title-copy-boxes-item ${relationships.field_image ? 'with-image' : ''} ${field_link ? '' : 'has-no-link'} `}
                    >
                        <div className='title-copy-boxes-img-wrapper'>
                            {relationships.field_image &&
                            <div data-gatsby-image-wrapper class="gatsby-image-wrapper title-copy-boxes-img clear-top-padding ">
                                <img src={relationships.field_image} style={{width: '100%'}} />
                            </div>
                            }
                        </div>
                        <div className='title-copy-boxes-content'>
                            <a href={field_link?.trim()}><h4 className={`title-copy-boxes-title ${field_link ? 'arrowed-item' : 'arrowed-item has-no-link'}`}>{field_title}</h4></a>
                            <p className='title-copy-boxes-text'>{field_description.value}</p>

                            {field_link && <a className='link-arrow' href={field_link.trim()}>
                            <svg className='icon-arrow-svg' width='28' height='26' viewBox='0 0 28 26' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                <path d='M15 2L26 13M26 13L15 24M26 13L2 13' stroke='white' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/>
                            </svg>

                            </a>}
                            {uri && <a className='link-arrow' href={uri}>
                            <svg className='icon-arrow-svg' width='28' height='26' viewBox='0 0 28 26' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                <path d='M15 2L26 13M26 13L15 24M26 13L2 13' stroke='white' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/>
                            </svg>
                            </a>}
                        </div>
                    </div>
                );
            })}
        </div>
        </div>
    );
};

export default TitleCopyBoxes;

TitleCopyBoxes.propTypes = {
    items: PropTypes.array,
    backgroundClass: PropTypes.string,
    imageClass: PropTypes.string,
    colorScheme: PropTypes.string,
    middleRowEven: PropTypes.bool,
}

TitleCopyBoxes.defaultProps = {
    items: [],
    backgroundClass: '',
    imageClass: '',
    colorScheme: '',
    middleRowEven: false,
}