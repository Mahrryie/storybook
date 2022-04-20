import React from 'react';
import PropTypes from 'prop-types';
import '../styles/index.scss';
import Cat from '../assets/cat1.jpeg';
import TitleLink from './TitleLink';

const ImageArrowLinksGridWithTextBlock = ({
    items,
    imageHeaderClass='',
    imageClass = '',
    textClass = '',
    backgroundClass = '',
    halvedItemClass = '',
    content,
    imageTitleLink,
    imageTitleLinkClass = '',
    colorScheme}) => {
    return (
        <div className={`section main-grid image-arrow-links ${backgroundClass} ${colorScheme}-scheme`}>
            <div className={'halved-content-image-item background-theme'}>
                <div className={`background-theme inner-content ${imageHeaderClass}`}>
                    {imageTitleLink ?
                        <>
                            <TitleLink title={items[0].field_title} link={items[0].field_link} titleClass={imageTitleLinkClass}/>
                            <p className={textClass}>{items[0].field_description.value}</p>
                        </>
                        : <>
                            <h2>{items[0].field_title}</h2>
                            <p className={textClass}>{items[0].field_description.value}</p>
                        </>
                    }
                </div>
                <img alt='image' src={Cat} className={imageClass} style={{height: '400px'}}/>
            </div>
            <div className={`halved-content-item ${halvedItemClass}`}>
                {!content && <div className='container-small'>
                    {items.map(({field_title, field_description, field_link}) => (
                        <div key={field_title} className={field_link ? 'arrow-links-item' : 'arrow-links-item has-no-link'}>
                            <h4 className={field_link && 'image-arrow-title-haslink'}>{field_title}</h4>
                            <p>{field_description.value}</p>
                            {field_link && <a className='link-arrow' to={field_link}>
                                <svg className='icon-arrow-svg' width='28' height='26' viewBox='0 0 28 26' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                    <path d='M15 2L26 13M26 13L15 24M26 13L2 13' stroke='white' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/>
                                </svg>
                                </a>}
                        </div>
                    ))}
                </div>}
                {content && <div className='container-small'>{content}</div>}
            </div>
        </div>
    );
};

export default ImageArrowLinksGridWithTextBlock;