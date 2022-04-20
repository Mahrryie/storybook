import React from 'react';
import PropTypes from 'prop-types';
import '../styles/index.scss';
import Cat from '../assets/cat3.jpeg';
import LinkArrow from './LinkArrow';

const ImageGridBorderedCaption = ({items, containerClass='', imageClass='', titleClass='', halvedBorder = false, subTextClass = '', children, colorScheme}) => {
    return (
        <div className={`image-grid-bordered-caption main-grid ${containerClass} ${colorScheme}-scheme`}>
            {children}
        </div>
    );
};

const ImageGridBorderedCaptionContent = ({items, imageClass, subTextClass, halvedBorder, titleClass}) => {
    return (
        items.map(({field_title, field_description, field_secondary_description, field_link, field_list, relationships = {}, field_image}) => {
            return (
                <div key={field_title} className='image-grid-bordered-caption-item main-grid-item'>
                    {field_image &&
                        <img
                            src={field_image}
                            alt=''
                            className={`image-grid-bordered-caption-img ${imageClass}`}
                            style={{width: '100%', height: '280px'}}
                        />
                    }
                    <div className={`image-grid-bordered-caption-text ${halvedBorder ? 'halved-border': ''} ${!field_secondary_description || !field_list ? 'image-grid-empty' : ''}`}>
                        {field_secondary_description ? <p className={`caption-name medium-bold ${subTextClass}`}>{field_secondary_description}</p> : null}
                        {field_list ? <p className='caption-text'>{field_list}</p> : null}
                    </div>
                    {field_link ? <a to={field_link}>
                        <h4 className={`image-grid-bordered-caption-title link-hover ${titleClass}`}>{field_title}</h4>
                    </a> : <h4 className='image-grid-bordered-caption-title'>{field_title}</h4>}
                    {field_link ? <LinkArrow link={field_link} text={field_description.value}/>: <p className='image-grid-bordered-caption-description'>{field_description.value}</p>}
                </div>
            );
        })
    )
}

export {ImageGridBorderedCaption, ImageGridBorderedCaptionContent};

ImageGridBorderedCaption.propTypes = {
    children: PropTypes.array,
    colorScheme: PropTypes.string,
}

ImageGridBorderedCaption.defaultProps = {
    children: [],
    colorScheme: '',
}

ImageGridBorderedCaptionContent.propTypes = {
    items: PropTypes.array,
    imageClass: PropTypes.string,
    subTextClass: PropTypes.string,
    halvedBorder: PropTypes.bool,
    titleClass: PropTypes.string,
}

ImageGridBorderedCaptionContent.defaultProps = {
    quote: [],
    imageClass: '',
    subTextClass: '',
    halvedBorder: false,
    titleClass: '',
}