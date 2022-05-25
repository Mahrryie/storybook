import React, {useState} from 'react';
import PropTypes from 'prop-types';
import '../styles/index.scss';
import {LinkedinShareButton, FacebookShareButton, TwitterShareButton} from 'react-share';

const SideShareMenu = ({preText}) => {
    const [open, setOpen] = useState(false);

    const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

    const shareTitleStyle = {
        fontWeight: 500,
        padding: 'inherit',
    };

    return (
        <div className='share-menu-wrapper'>
            <button className={open ? 'share-menu-link open' : 'share-menu-link'} onClick={() => setOpen(!open)}>
                <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' class='share-menu-icon'>
                    <path d='M7.92583 10.1799C7.38443 9.03893 6.22184 8.25 4.875 8.25C3.01104 8.25 1.5 9.76104 1.5 11.625C1.5 13.489 3.01104 15 4.875 15C6.17124 15 7.29681 14.2692 7.8622 13.1972M7.92583 10.1799C8.1337 10.6179 8.25 11.1079 8.25 11.625C8.25 12.1927 8.10983 12.7277 7.8622 13.1972M7.92583 10.1799L16.0742 6.32013M7.8622 13.1972L16.1378 17.5528M16.0742 6.32013C16.6156 7.46107 17.7782 8.25 19.125 8.25C20.989 8.25 22.5 6.73896 22.5 4.875C22.5 3.01104 20.989 1.5 19.125 1.5C17.261 1.5 15.75 3.01104 15.75 4.875C15.75 5.39212 15.8663 5.88207 16.0742 6.32013ZM16.1378 17.5528C15.8902 18.0223 15.75 18.5573 15.75 19.125C15.75 20.989 17.261 22.5 19.125 22.5C20.989 22.5 22.5 20.989 22.5 19.125C22.5 17.261 20.989 15.75 19.125 15.75C17.8288 15.75 16.7032 16.4808 16.1378 17.5528Z' stroke='#6E6D71' stroke-width='2'/>
                </svg>
                <span className='share-menu-text'>Share</span>
            </button>
            <ul className={open ? 'share-menu-list open' : 'share-menu-list'}>
                <li className='share-menu-list-item'><FacebookShareButton style={shareTitleStyle} className='share-menu-list-link' url={shareUrl} title={preText ? `${preText} - Itransition` : 'Explore this post from Itransition'}>
                    <svg className='icon-social-svg' width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <g clipPath='url(#linkedin)'>
                            <path fill-rule='evenodd' clip-rule='evenodd' d='M15 0C6.7 0 0 6.7 0 15C0 23.3 6.7 30 15 30C23.3 30 30 23.3 30 15C30 6.7 23.3 0 15 0ZM12 21H9.5V12H12V21ZM11 11C10.2 11 9.5 10.3 9.5 9.5C9.5 8.7 10.2 8 11 8C11.8 8 12.5 8.7 12.5 9.5C12.5 10.4 11.9 11 11 11ZM21.5 21H19V15C19 15 18.8 14 17.5 14C16.2 14 16 15 16 15V21H13.5V12H16V13C16 13 16.6 11.5 18.5 11.5C20.7 11.5 21.5 13.1 21.5 14.5V21Z' fill='#323232'/>
                        </g>
                    </svg>
                    <span className='share-menu-list-title'>Facebook</span>
                    </FacebookShareButton>
                </li>
                <li className='share-menu-list-item'><TwitterShareButton style={shareTitleStyle} className='share-menu-list-link' url={shareUrl} title={preText ? `${preText} - Itransition` : 'Explore this post from Itransition'}>
                    <svg className='icon-social-svg' width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <g clipPath='url(#twitter)'>
                            <path fill-rule='evenodd' clip-rule='evenodd' d='M15 0.0996094C6.7 0.0996094 0 6.79961 0 15.0996C0 23.3996 6.7 30.0996 15 30.0996C23.3 30.0996 30 23.3996 30 15.0996C30 6.79961 23.3 0.0996094 15 0.0996094ZM21.8 12.6996V13.0996C21.8 17.2996 18.5 22.0996 12.3 22.0996C10.4 22.0996 8.7 21.5996 7.2 20.6996H8C9.6 20.6996 11 20.1996 12.1 19.2996C10.6 19.2996 9.4 18.3996 9 17.0996C9.2 17.0996 9.4 17.1996 9.6 17.1996C9.9 17.1996 10.2 17.1996 10.5 17.0996C9 16.8996 7.9 15.5996 7.9 13.9996C8.3 14.1996 8.9 14.3996 9.4 14.3996C8.5 13.7996 7.9 12.8996 7.9 11.7996C7.9 11.1996 8.1 10.6996 8.4 10.1996C10 12.0996 12.5 13.3996 15.3 13.4996C15.2 13.2996 15.2 12.9996 15.2 12.7996C15.2 10.9996 16.7 9.59961 18.5 9.59961C19.5 9.59961 20.3 9.99961 20.9 10.5996C21.7 10.4996 22.4 10.1996 23 9.79961C22.8 10.4996 22.2 11.1996 21.5 11.5996C22.2 11.4996 22.8 11.3996 23.4 11.0996C23 11.6996 22.4 12.2996 21.8 12.6996Z' fill='#323232'/>
                        </g>
                    </svg>
                    <span className='share-menu-list-title'>Twitter</span>
                    </TwitterShareButton>
                </li>
                <li className='share-menu-list-item'><LinkedinShareButton style={shareTitleStyle} className='share-menu-list-link' url={shareUrl} title={preText ? `${preText} - Itransition` : 'Explore this post from Itransition'}>
                    <svg className='icon-social-svg' width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M15 0C6.7 0 0 6.7 0 15C0 23.3 6.7 30 15 30C23.3 30 30 23.3 30 15C30 6.7 23.3 0 15 0ZM18.7 10.6H16.7C16.2 10.6 15.8 11 15.8 11.6V12.4H18.7L18.2 15H15.8V22.2H12.9V15H11V12.3H12.9V11C13 9.4 13.5 8 16.4 7.9H18.8V10.6H18.7Z' fill='#323232'/>
                    </svg>
                    <span className='share-menu-list-title'>LinkedIn</span>
                    </LinkedinShareButton>
                </li>
            </ul>
        </div>
    );
};

export default SideShareMenu;

SideShareMenu.propTypes = {
    preText: PropTypes.string,
}

SideShareMenu.defaultProps = {
    preText: ''
}