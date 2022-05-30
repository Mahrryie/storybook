import React from 'react';
import Paragraph from './Paragraph';
import PropTypes from 'prop-types';
import TitleThird from './TitleThird';

const ListOutstanding = ({items}) => {
    return (
        <div className='list-overview'>
            {items.map(({field_title, field_description}) => (
                <div className='list-overview-item'>
                    <TitleThird title={field_title}/>
                    <Paragraph paragraphClass='list-block-links-text' item={field_description.value}/>
                </div>
            ))}
        </div>
    );
};

export default ListOutstanding;

ListOutstanding.propTypes = {
    items: PropTypes.object,
}

ListOutstanding.defaultProps = {
    items: {},
}