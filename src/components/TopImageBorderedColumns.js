import React from 'react';
import LinkArrow from './LinkArrow';
import PropTypes from 'prop-types';

const TopImageBorderedColumns = ({
    items,
    titleClass = '',
    containerClass = '',
    titleCustomClass,
    imageClass = '',
    titleLinkArrow = false,
    gridAdditionalClass = '',
    colorScheme = 'primary'}) => {
    return (

        <div className={`top-image-bordered-columns ${containerClass} ${colorScheme}-scheme`}>
            <div className={`main-grid ${gridAdditionalClass}`}>
                {items.map(({title, subText, link, linkSecond, content, titleCustomNumber, image}) => {
                    return (
                        <div key={title} className='main-grid-item top-image-bordered-columns-item'>
                            {image ? <div
                                className={`top-image-bordered-columns-image clear-top-padding ${imageClass} gatsby-image-wrapper`}
                                style={{overflow: 'hidden'}}>
                                    <img src={image} style={{width: '100%'}}/>
                                </div> : null
                            }
                            {link ?
                                <a href={link}>
                                    <h4 className={`top-image-bordered-columns-pretitle ${titleClass} ${link ? 'link-hover' : ' '}`}>
                                        {titleCustomNumber &&
                                            <span className={`top-image-bordered-columns-number ${titleCustomClass}`}>{titleCustomNumber}</span>
                                        }
                                        <p className='top-image-bordered-columns-subtext'>{subText}</p>
                                    </h4>
                                </a> :
                                <h4 className={`top-image-bordered-columns-pretitle ${titleClass}`}>
                                    {titleCustomNumber &&
                                        <span className={`top-image-bordered-columns-number ${titleCustomClass}`}>{titleCustomNumber}</span>
                                    }
                                    <p className='top-image-bordered-columns-subtext'>{subText}</p>
                                </h4>
                            }
                            {linkSecond ?
                                <div className='title-link-wrapper'>
                                    <a href={linkSecond}>
                                        <h4 className={`top-image-bordered-columns-title ${linkSecond ? 'link-hover' : ' '}`}>{title}</h4>
                                    </a>
                                    {titleLinkArrow ?
                                        <LinkArrow link={linkSecond} linkClass='title-link' colorScheme={colorScheme}/>
                                        :
                                        null
                                    }
                                </div>
                                :
                                <h4 className='top-image-bordered-columns-title'>{title}</h4>
                            }
                            {content}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TopImageBorderedColumns;

TopImageBorderedColumns.propTypes = {
    items: PropTypes.array,
    titleClass: PropTypes.string,
    containerClass: PropTypes.string,
    titleCustomClass: PropTypes.string,
    imageClass: PropTypes.string,
    titleLinkArrow: PropTypes.bool,
    gridAdditionalClass: PropTypes.string,
    colorScheme: 'primary'
}

TopImageBorderedColumns.defaultProps = {
    items: [],
    titleClass: '',
    containerClass: '',
    titleCustomClass: '',
    imageClass: '',
    titleLinkArrow: false,
    gridAdditionalClass: '',
    colorScheme: 'primary'
}

