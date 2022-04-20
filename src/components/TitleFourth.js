import React from 'react';
import '../styles/typography.scss';

const TitleFourth = ({title, titleClass}) => {
    return (
        <h4 className={titleClass}>
            {title}
        </h4>
    );
};

export default TitleFourth;

TitleFourth.defaultProps = {
    titleClass: '',
    title: '',
};