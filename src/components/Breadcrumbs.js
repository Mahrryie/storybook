import React from 'react';
import '../styles/index.scss';
import PropTypes from 'prop-types';

const Breadcrumbs = ({links, pageName, className, nullLinks = false, nullLink = '', nullTitle = '', color}) => {
    return (
        <div className={`container ${color}-scheme`}>
            <ul className='breadcrumbs'>
                <li key='home' className='breadcrumbs-item'>
                    <a className={`breadcrumbs-link ${className}`} to={'/'}>Home</a>
                </li>
                {links.map(link => {
                    return (
                        <li key={link.title} className='breadcrumbs-item'>
                            <a className={`breadcrumbs-link ${className}`} to={`${link.path.alias}`}>{link.title}</a>
                        </li>
                    );
                })}
                {nullLinks && <li className='breadcrumbs-item'>
                    <a className={`breadcrumbs-link ${className}`} to={`${nullLink}`}>{nullTitle}</a>
                </li>}
                <li className='breadcrumbs-item '>{pageName}</li>
            </ul>
        </div>
    );
};

export default Breadcrumbs;

Breadcrumbs.propTypes = {
    links: PropTypes.array,
    pageName: PropTypes.string,
    className: PropTypes.string,
    nullLinks: PropTypes.bool,
    nullLink: PropTypes.string,
    nullTitle: PropTypes.string,
}

Breadcrumbs.defaultProps = {
    links: Array,
    pageName: '',
    className: '',
    nullLinks: false,
    nullLink: '',
    nullTitle: '',
};
