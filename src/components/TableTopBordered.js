import React from 'react';
import TitleLink from './TitleLink';
import PropTypes from 'prop-types';

const TableTopBordered = ({
    items,
    isCounter = false,
    titleGridClass = '',
    textGridClass = '',
    headerClass = '',
    titles,
    colorScheme = 'primary'}) => {
    return (
        <div className={`${colorScheme}-scheme`}>
        {titles &&
            <div className='main-grid desktop-tablet-only'>
                {titles.map(title => (
                    <div key={title} className='main-grid-item table-top-bordered-above-title'>
                        <h4>{title}</h4>
                    </div>
                ))}
            </div>
        } 
        <div className='table-top-bordered'>
            {items.map(({field_title, field_description, field_link, content}, index) => (
                <div key={index} className='main-grid table-top-bordered-row'>
                    {field_title && (<div className={`main-grid-item ${titleGridClass}`}>
                        {field_link ?
                            <TitleLink title={field_title} link={field_link} titleClass='fourth-level-title' colorScheme={colorScheme}/> :
                            <h4 className={headerClass}>
                                {isCounter && <span className='title-number'>{index + 1} </span>}
                                <span>{field_title}</span>
                            </h4>
                        }
                    </div>
                    )}
                    <div className={`main-grid-item ${textGridClass}`}>
                        {!field_title && isCounter && <span className='title-text-number'>{index + 1} </span>}
                        {field_description && <p className='paragraph'>{field_description.value}</p>}
                    </div>
                    {content}
                </div>
            ))}
        </div>
        </div>
    );
};

export default TableTopBordered;

TableTopBordered.propTypes = {
    items: PropTypes.array,
    isCounter:PropTypes.bool,
    textGridClass: PropTypes.string,
    headerClass: PropTypes.string,
    titles: PropTypes.array,
    colorScheme: PropTypes.string,
}

TableTopBordered.defaultProps = {
    items: [],
    isCounter: false,
    titleGridClass: '',
    textGridClass: '',
    headerClass: '',
    titles: [],
    colorScheme: 'primary-scheme'
}

