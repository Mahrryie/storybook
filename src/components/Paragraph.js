import React from 'react';
import PropTypes from 'prop-types';

const Paragraph = ({item = '', paragraphClass = ''}) => {
    return (
        <p className={`paragraph ${paragraphClass}`}>{item}</p>
    );
};

export default Paragraph;

Paragraph.propTypes = {
    item: PropTypes.string,
    paragraphClass: PropTypes.string,
}

Paragraph.defaultProps = {
    item: '',
    paragraphClass: '',
};