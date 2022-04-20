import React from 'react';
import '../styles/index.scss';
import LinkArrow from './LinkArrow';
import PropTypes from 'prop-types';

const TitleLink = ({title, titleClass='', titleLinkClass='', link, colorScheme}) => {
    return (
        <div className={`title-link-wrapper ${titleLinkClass}`}>
            <h3 className={`title-link-text ${titleClass}`}>
                {link && <a to={link}>{title}</a>}
            </h3>
            {link && <LinkArrow link={link} linkClass='title-link' colorScheme={colorScheme} text={null}/>}
        </div>
    );
};

export default TitleLink;

TitleLink.propTypes = {
    title: PropTypes.string,
    titleClass: PropTypes.string,
    titleLinkClass: PropTypes.string,
    link: PropTypes.string,
    colorScheme: PropTypes.string,
}

TitleLink.defaultProps = {
    title: '',
    titleClass: '',
    titleLinkClass: '',
    link: '',
    colorScheme: ''
}