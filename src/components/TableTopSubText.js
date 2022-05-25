import React from 'react';
import PropTypes from 'prop-types';

const TableTopSubText = ({items, colorScheme}) => {
    return (
        <div className={`${colorScheme}-scheme`}>
        <div className='main-grid table-top-subtext'>
            {items.map(({field_title, field_description}, index) => (
                (field_title && field_description) && <div key={index} className='main-grid-item table-top-subtext-item'>
                    <h4 className='table-top-title'>
                        {field_title}
                    </h4>
                    <p className='table-top-text'>{field_description.value}</p>
                </div>
            ))}
        </div>
        </div>
    );
};

export default TableTopSubText;

TableTopSubText.propTypes = {
    items: PropTypes.array,
    colorScheme: PropTypes.string,
}

TableTopSubText.defaultProps = {
    items: [],
    colorScheme: 'primary'
}