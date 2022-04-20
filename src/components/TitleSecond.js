import React from 'react';
import '../styles/reset.css';
import '../styles/typography.scss';

const TitleSecond = ({title, titleClass, titleNumber}) => {
    return (
        <h2 className={titleClass}>
            {titleNumber && <span className='title-number'>{titleNumber} </span>}
            {title}
        </h2>
    );
};

export default TitleSecond;

TitleSecond.defaultProps = {
    titleNumber: null,
    titleClass: '',
};