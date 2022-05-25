import React from 'react';
import PropTypes from 'prop-types';
import '../styles/index.scss';
import {Link} from 'react-scroll';
import SideShareMenu from './SideShareMenu';

const Sidemenu = ({type, title, subtitle, items, share, colorScheme}) => {
    return (
        <div id='side-menu' className={`side-info-menu ${colorScheme}-scheme`}>
            <div className='side-info-menu-header'>
                <div className='side-info-menu-header-text'>
                    {type && <p className='side-info-menu-type'>Table of contents</p>}
                </div>
            </div>
            <ul className='side-info-menu-list'>
                {items.map(({title, subtitle, link}) => {
                    if (title) {
                        return (
                            <li key={link}  className={`${type == 'Blog'? 'blog-side-menu': ''}`}>
                                <Link to={link} key={title} className='side-info-menu-item' activeClass='active' spy={true} smooth={true} duration={300} offset={-80}>
                                {type == 'Blog'? <h3>{title}</h3> : title}</Link>
                            </li>
                        );
                    }
                })}
            </ul>
            {share && <SideShareMenu/>}
        </div>
    );
};

export default Sidemenu;

Sidemenu.propTypes = {
    type: PropTypes.string,
    share: PropTypes.bool,
    colorScheme: PropTypes.string
}

Sidemenu.defaultProps = {
    type: '',
    share: true,
    colorScheme: ''
}