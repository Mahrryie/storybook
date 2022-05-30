import React from 'react';
import LinkArrow from './LinkArrow';
import TitleLink from './TitleLink';
import PropTypes from 'prop-types';

const TitleCopyRows = ({
    items,
    titleNumber,
    containerClass = '',
    titleClass= '',
    paragraphClass = '',
    titleLink = false,
    colorScheme}) => {
    return (
        <>
            {items &&
                items.map(({field_title, field_description, field_link}) => (
                    <div key={field_title} className={`title-copy-rows ${containerClass}`}>
                        {field_link ? <TitleLink title={field_title} link={field_link} titleClass={titleClass} colorScheme={colorScheme}/>
                            : <h2 className={`title ${titleClass}`}>
                                {titleNumber && <span className='title-number'>{titleNumber} </span>}
                                {field_title} </h2>
                        }
                        {field_description && <p className={`paragraph ${paragraphClass}`}>{field_description.value}</p>}
                        {field_link && (titleLink ? null : <LinkArrow link={field_link} colorScheme={colorScheme}/>)}
                    </div>
                ))
            }
        </>
    );
};

export default TitleCopyRows;

TitleCopyRows.propTypes = {
    items: PropTypes.array,
    titleNumber: PropTypes.number,
    containerClass: PropTypes.string,
    titleClass: PropTypes.string,
    paragraphClass: PropTypes.string,
    titleLink: PropTypes.bool,
    colorScheme: PropTypes.string,
}

TitleCopyRows.defaultProps = {
    items: [],
    titleNumber: null,
    containerClass: '',
    titleClass: '',
    paragraphClass: '',
    titleLink: false,
    colorScheme: 'primary',
}