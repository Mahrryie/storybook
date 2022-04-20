import React from 'react';
import '../styles/typography.scss';

const Paragraph = ({item = '', paragraphClass = ''}) => {
    return (
        <p className={`paragraph ${paragraphClass}`}>{item}</p>
    );
};

export default Paragraph;

Paragraph.defaultProps = {
    paragraphClass: '',
};