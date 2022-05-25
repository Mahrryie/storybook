import React from 'react';
import TitleLink from './TitleLink';
import PropTypes from 'prop-types';

const TableQuote = ({items, tableClass = '', titleGridClass = '', listClass = '', withoutListMarker = true, colorScheme = 'primary'}) => {
    return (
        <div className={`${colorScheme}-scheme`}>
        <div className='container table-top-bordered'>
            <div className={`table ${tableClass} table-top-bordered-row`}>
                {items.map(({field_title, field_list, field_description, field_link, field_secondary_description}) => (
                    <div key={field_title} className='table-row'>
                        <div className={`main-grid-item table-quote-grid ${titleGridClass}`}>
                            <div className='table-quote-wrapper'>
                            <svg width='18' height='26' viewBox='0 0 18 26' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                <path d='M1 17.6H7.08955L9.0398 7H2.95025L1 17.6ZM8.9602 17.6H15.0497L17 7H10.9104L8.9602 17.6Z' fill='#FF04D5'/>
                            </svg>
                            </div>
                            {field_title && <p itemProp='name' className='table-quote-text'>{field_title}</p>}
                        </div>
                        <div className={`main-grid-item`}>
                            <div itemProp='text' className={`${titleGridClass} table-quote-list-grid`}>
                                {field_secondary_description && (field_link? <TitleLink title={field_secondary_description} link={field_link} titleClass='fourth-level-title' colorScheme={colorScheme}/>: <h4 className='table-quote-title'>{field_secondary_description}</h4>)}
                                {field_list && <ul className={`list ${listClass} table-quote-list`}>
                                    {field_list.map((listItem) => (
                                        <li key={listItem} className={`table-quote-list-item ${withoutListMarker ? 'without-list-mark' : 'list-item'}`}>
                                            {listItem}
                                        </li>
                                    ))}
                                </ul>}
                                {field_description && <p className='table-quote-subtext'>{field_description?.value}</p>}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
};

export default TableQuote;

TableQuote.propTypes = {
    items: PropTypes.array,
    tableClass: PropTypes.string,
    titleGridClass: PropTypes.string,
    listClass: PropTypes.string,
    withoutListMarker: PropTypes.bool,
    colorScheme: PropTypes.string,
}

TableQuote.defaultProps = {
    items: [],
    tableClass: '',
    titleGridClass: '',
    listClass: '',
    withoutListMarker: true,
    colorScheme: 'primary'
}
