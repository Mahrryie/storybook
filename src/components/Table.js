import React from 'react';
import PropTypes from 'prop-types';

const Table = ({items, tableClass = '', isCounter = false, colorScheme = 'primary'}) => {
    return (
        <div className={`container ${colorScheme}-scheme`}>
            <div className={`table ${tableClass}`}>
                {items.map(({title, listItems}, index) => (
                    <div key={title} className='table-row'>
                        <h4 className='table-title'>
                            {isCounter && <span className='title-number'>{index + 1}  </span>}
                            {title}</h4>
                        <ul className='table-list'>
                            {listItems.map((listItem) => (
                                <li key={listItem} className={`table-list-item table-list-item-${index}`}>
                                    {listItem}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Table;

Table.propTypes = {
    items: PropTypes.array,
    tableClass: PropTypes.string,
    isCounter: PropTypes.string,
}

Table.defaultProps = {
    items: [],
    tableClass: '',
    isCounter: false,
}

