import React from 'react';
import classNames from 'classnames';
import TitleLink from './TitleLink';
import PropTypes from 'prop-types';

const TableTopBorderedTitles = ({
    items,
    tableClass = '',
    isCounter = false,
    isQuote = false,
    firstCellFree = true,
    titleGridClass = '',
    tableTopBorderedClass = '',
    titles,
    renderIcons,
    titleClass = 'fifth-level-title',
    listItemParagraphClass = false,
    colorScheme = 'primary-scheme'}) => {
    const paragraphClassNames = classNames({
        'paragraph': true,
        'paragraph-list-item-lh': listItemParagraphClass,
    });

    return (
        <div className={`table-top-bordered-container ${tableTopBorderedClass} ${colorScheme}`}>
            { titles &&
                <div className='main-grid desktop-tablet-only'>
                    {firstCellFree && <div className='main-grid-item'/>}
                    {titles.map((title) => (
                        <div key={title} className='main-grid-item table-title-columns'>
                            <h4>{title}</h4>
                        </div>
                    ))}
                </div>
            }
            <div className={`table-top-bordered ${tableClass}`}>
                {items.map(({field_title, field_description, field_list, field_link}, index) => (
                    <div key={field_title} className='main-grid table-top-bordered-row'>
                        <div className={`main-grid-item ${titleGridClass}`}>
                            {field_link ? <>
                                {isCounter && <span className='title-number'>{index + 1} </span>}
                                <TitleLink title={field_title} link={field_link} titleClass={titleClass} colorScheme={colorScheme}/></>
                                : <h5 className={titleClass}>
                                {isCounter && <span className='title-number'>{index + 1} </span>}
                                {field_title && field_title}
                            </h5>}
                                {field_description && isQuote? <div className='table-quote-wrapper'>
                                <svg width='18' height='26' viewBox='0 0 18 26' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                    <path d='M1 17.6H7.08955L9.0398 7H2.95025L1 17.6ZM8.9602 17.6H15.0497L17 7H10.9104L8.9602 17.6Z' fill='#FF04D5'/>
                                    </svg>
                                    <p className='paragraph'>{field_description.value}</p></div>
                                : field_description && <p className='paragraph'>{field_description.value}</p>
                                }
                        </div>
                        {titles && titles.map((title) => (
                            <div key={title} className='main-grid-item small-device-only'>
                                <p className='title-bolder'>{title}</p>
                            </div>
                        ))}
                        {field_list && field_list.map(listItem => (
                            <div key={listItem} className='main-grid-item'>
                                <p className={paragraphClassNames}>{listItem}</p>
                            </div>
                        ))}
                        {renderIcons && renderIcons(index)}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TableTopBorderedTitles;

TableTopBorderedTitles.propTypes = {
    items: PropTypes.array,
    tableClass: PropTypes.string,
    isCounter: PropTypes.bool,
    isQuote: PropTypes.bool,
    firstCellFree: PropTypes.bool,
    titleGridClass: PropTypes.string,
    tableTopBorderedClass: PropTypes.string,
    titles: PropTypes.array,
    renderIcons: PropTypes.func,
    titleClass: PropTypes.string,
    listItemParagraphClass: PropTypes.bool,
    colorScheme: PropTypes.string,
}

TableTopBorderedTitles.defaultProps = {
    items: [],
    tableClass: '',
    isCounter: false,
    isQuote: false,
    firstCellFree: true,
    titleGridClass: '',
    tableTopBorderedClass: '',
    titles: [],
    renderIcons: (index) => {},
    titleClass: 'fifth-level-title',
    listItemParagraphClass: false,
    colorScheme: 'primary-scheme'
}