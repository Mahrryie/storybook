import React from 'react';
import '../styles/index.scss';
import Paragraph from './Paragraph';
import PropTypes from 'prop-types';

const ListOfTitleLinkBlocks  = ({items}) => {
    return (
        <>
            {items.map(({field_title, field_link, field_description}) => (
                <div className='list-block-links'>
                   {field_link ? <a className='list-block-link-item' to={field_link || ''}>
                            <h5 className='list-block-links-title'>{field_title}</h5>
                            <Paragraph paragraphClass='list-block-links-text' item={field_description.value}/>
                        </a> :
                    <div className='list-block-link-item without-link'> <h5 className='list-block-links-title'>{field_title}</h5>
                        <Paragraph paragraphClass='list-block-links-text' item={field_description.value}/>
                    </div>}
                </div>
            ))}
        </>
    );
};

export default ListOfTitleLinkBlocks;

ListOfTitleLinkBlocks.propTypes = {
    items: PropTypes.object,
}

ListOfTitleLinkBlocks.defaultProps = {
    items: {},
}