import React from 'react';
import PropTypes from 'prop-types';

import SwiperCore, {Navigation} from 'swiper';
import {withResizeDetector} from 'react-resize-detector';
import {Swiper, SwiperSlide} from 'swiper/react';
import TitleFourth from './TitleFourth';

SwiperCore.use([Navigation]);

const Cards = ({items, width = 0, colorScheme = 'primary'}) => {

    const swiperParams = {
        breakpoints: {
            650: {slidesPerView: 2.15},
            500: {slidesPerView: 1.5},
            230: {slidesPerView: 1.15},
        },
        scrollbar: {draggable: true},
        navigation: {nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev'},
        setWrapperSize: true,
    };

    if ( width <= 767 ) {

        return (
            <div className={`${colorScheme}-scheme`}>
                <div className='cards-title-wrapper'>
                    <div className='swiper-button-navigation swiper-button-prev'>
                        <svg className='icon-arrow-svg' width='28' height='26' viewBox='0 0 28 26' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path d='M15 2L26 13M26 13L15 24M26 13L2 13' stroke='red' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/>
                        </svg>
                    </div>
                    <TitleFourth title={'Related cases'} titleClass='related-cases-title'/>
                    <div className='swiper-button-navigation swiper-button-next'>
                        <svg className='icon-arrow-svg' width='28' height='26' viewBox='0 0 28 26' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path d='M15 2L26 13M26 13L15 24M26 13L2 13' stroke='red' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/>
                        </svg>
                    </div>
                </div>
                <Swiper className={`section cards cards-type-${items.length}`} {...swiperParams}>
                    {items.map(({fileName, title, path, descriptionField}) => (
                        <SwiperSlide key={title}>
                            <a key={title} to={path.alias} className='cards-item'>
                                <div className='cards-item-inner cards-item-inner-img'>
                                    {fileName.articleField &&
                                        <div data-gatsby-image-wrapper className='gatsby-image-wrapper'>
                                        <img src={fileName.articleField}/>
                                    </div>
                                    }
                                </div>
                                <div className='cards-item-inner'>
                                    <div className='cards-item-content'>
                                        <h3 className={`title ${descriptionField?.description? 'has-text-after' : ''}`}>{title}</h3>
                                        {descriptionField?.description && <p className='paragraph'>{descriptionField?.description}</p>}
                                    </div>
                                </div>
                            </a>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        );
    } else {
        return (
            <div className={`${colorScheme}-scheme`}>
            <div className={`section cards cards-type-${items.length}`}>
                {items.map(({fileName, title, path, descriptionField, internal}) => (
                    <a key={title} to={path.alias} className='cards-item'>
                        <div className='cards-item-inner cards-item-inner-img'>
                            {fileName.articleField &&
                            <div data-gatsby-image-wrapper className='gatsby-image-wrapper'>
                                <img src={fileName.articleField}/>
                            </div>
                            }
                        </div>
                        <div className='cards-item-inner'>
                            <div className='cards-item-content'>
                                <p className='sub-title'>{internal.type}</p>
                                <h4 className='title'>{title}</h4>
                                <p className='paragraph'>{descriptionField?.description}</p>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
            </div>
        );
    }
};

export default withResizeDetector(Cards);

Cards.propTypes = {
    items: PropTypes.array,
    colorScheme: PropTypes.string,
}

Cards.defaultProps = {
    items: [],
    colorScheme: 'primary'
};
