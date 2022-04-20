import React from 'react';
import '../styles/reset.css';
import '../styles/typography.scss';

const TitleThird = ({title, titleClass, titleNumber}) => {
   
    return (
        <h3 className={titleClass}>
            {titleNumber && <span className='title-number'>{titleNumber} </span>}
            {title}
        </h3>
    );
};

export default TitleThird;
