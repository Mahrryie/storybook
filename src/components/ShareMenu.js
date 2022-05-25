import React from 'react';
import PropTypes from 'prop-types';
import '../styles/index.scss';
import {LinkedinShareButton, FacebookShareButton, TwitterShareButton} from 'react-share';

const ShareMenu = ({containerClass, colorScheme}) => {

    const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

    return (
        <div className={`share-menu-container ${containerClass} ${colorScheme}-scheme`}>
            <div className='container'>
                <div className='share-list-section'>
                    <p className='share-list-label'>Share:</p>
                    <ul className='share-list'>
                        <li className='share-list-item'>
                            <LinkedinShareButton className='share-list-link' url={shareUrl}>
                            <svg className='icon-social-svg' width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                <path d='M15 0C6.7 0 0 6.7 0 15C0 23.3 6.7 30 15 30C23.3 30 30 23.3 30 15C30 6.7 23.3 0 15 0ZM18.7 10.6H16.7C16.2 10.6 15.8 11 15.8 11.6V12.4H18.7L18.2 15H15.8V22.2H12.9V15H11V12.3H12.9V11C13 9.4 13.5 8 16.4 7.9H18.8V10.6H18.7Z' fill='#323232'/>
                            </svg>
                            </LinkedinShareButton>
                        </li>
                        <li className='share-list-item'>
                            <FacebookShareButton className='share-menu-list-link' url={shareUrl}>
                                <svg className='icon-social-svg' width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                    <g clipPath='url(#linkedin)'>
                                        <path fill-rule='evenodd' clip-rule='evenodd' d='M15 0C6.7 0 0 6.7 0 15C0 23.3 6.7 30 15 30C23.3 30 30 23.3 30 15C30 6.7 23.3 0 15 0ZM12 21H9.5V12H12V21ZM11 11C10.2 11 9.5 10.3 9.5 9.5C9.5 8.7 10.2 8 11 8C11.8 8 12.5 8.7 12.5 9.5C12.5 10.4 11.9 11 11 11ZM21.5 21H19V15C19 15 18.8 14 17.5 14C16.2 14 16 15 16 15V21H13.5V12H16V13C16 13 16.6 11.5 18.5 11.5C20.7 11.5 21.5 13.1 21.5 14.5V21Z' fill='#323232'/>
                                    </g>
                                </svg>
                            </FacebookShareButton>
                        </li>
                        <li className='share-list-item'>
                            <TwitterShareButton className='share-list-link' url={shareUrl}>
                                <svg className='icon-social-svg' width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                    <g clipPath='url(#twitter)'>
                                        <path fill-rule='evenodd' clip-rule='evenodd' d='M15 0.0996094C6.7 0.0996094 0 6.79961 0 15.0996C0 23.3996 6.7 30.0996 15 30.0996C23.3 30.0996 30 23.3996 30 15.0996C30 6.79961 23.3 0.0996094 15 0.0996094ZM21.8 12.6996V13.0996C21.8 17.2996 18.5 22.0996 12.3 22.0996C10.4 22.0996 8.7 21.5996 7.2 20.6996H8C9.6 20.6996 11 20.1996 12.1 19.2996C10.6 19.2996 9.4 18.3996 9 17.0996C9.2 17.0996 9.4 17.1996 9.6 17.1996C9.9 17.1996 10.2 17.1996 10.5 17.0996C9 16.8996 7.9 15.5996 7.9 13.9996C8.3 14.1996 8.9 14.3996 9.4 14.3996C8.5 13.7996 7.9 12.8996 7.9 11.7996C7.9 11.1996 8.1 10.6996 8.4 10.1996C10 12.0996 12.5 13.3996 15.3 13.4996C15.2 13.2996 15.2 12.9996 15.2 12.7996C15.2 10.9996 16.7 9.59961 18.5 9.59961C19.5 9.59961 20.3 9.99961 20.9 10.5996C21.7 10.4996 22.4 10.1996 23 9.79961C22.8 10.4996 22.2 11.1996 21.5 11.5996C22.2 11.4996 22.8 11.3996 23.4 11.0996C23 11.6996 22.4 12.2996 21.8 12.6996Z' fill='#323232'/>
                                    </g>
                                </svg>
                            </TwitterShareButton>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ShareMenu;