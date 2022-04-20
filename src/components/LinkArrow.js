import React from 'react';
import '../styles/index.scss';

const LinkArrow = ({link, text, linkClass = '', textClass = '', colorScheme}) => {
    let color;

    if (colorScheme == 'primary') {
        color = '#FF04D5';
    } else if (colorScheme == 'secondary') {
        color = '#F8374E';
    } else if (colorScheme == 'tertiary') {
        color = '#FB7700';
    } else if (colorScheme == 'quaternary') {
        color = '#21E0DD';
    } 

    return (
        <a className={`link-arrow-single ${link ? '' : 'link-arrow-empty'} ${text ? 'has-text' :  ''} ${linkClass}`} to={link}>
            {text && <p className={`link-text ${textClass}`}>{text}</p>}
            {link &&
                <span className='link-arrow-single-inner'>
                    <svg className='icon-arrow-svg' width='28' height='26' viewBox='0 0 28 26' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M15 2L26 13M26 13L15 24M26 13L2 13' stroke={color} stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/>
                    </svg>
                </span>
            }
        </a>
    );
};

export default LinkArrow;


LinkArrow.defaultProps = {
    link: '',
    text: '',
    linkClass: '',
    textClass: '',
    colorScheme: 'primary',
};