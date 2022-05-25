import cat from '../assets/cat2.jpeg';
import TitleLink from './TitleLink';
import PropTypes from 'prop-types';

const ImageContentGrid = ({
    title,
    titleClass = '',
    content,
    contentLink,
    contentLinkOtherSide,
    backgroundClass = '',
    imageClass = '',
    withBorder = false,
    arrowLink,
    hasCallout = false,
    calloutOffsetBottom = false,
    isTitleLink = false,
    titleLink,
    titleNumber,
    isInverted = false,
    colorScheme = 'primary'}) => {
    return (
        <div className={`${colorScheme}-scheme`}>
        <div className={`section section-image-content main-grid ${backgroundClass} ${isInverted ? 'inverted' : ''}`}>
            <div className='halved-image-item'>
                <div className='gatsby-image-wrapper clear-top-padding'>
                    <img src={cat} alt='cat' className={imageClass} />
                </div>
                {contentLink}
                {contentLinkOtherSide &&
                    <div className='device-only'>
                        {contentLinkOtherSide}
                    </div>
                }
            </div>
            <div className={`halved-content-item ${hasCallout ? 'callout-stripe-small-bottom' : ''} ${calloutOffsetBottom ? 'callout-bottom-offset' : ''}`}>
                <div className={`'container-small ${withBorder ? 'container-small-border-top-bottom' : ''}`}>
                    {!isInverted && 
                        <div className='gatsby-image-wrapper clear-top-padding'>
                            <img src={cat} className='device-only image-device-only' alt='cat'/>
                        </div>
                    }
                    {(isTitleLink && title) ?
                        <>
                            {titleNumber && <span className='title-number'>{titleNumber} </span>}
                            <TitleLink title={title} link={titleLink} titleClass={titleClass}/>
                        </> :
                        title && <>
                            {titleNumber && <span className='title-number'>{titleNumber} </span>}
                            <h2 className={`image-copy-title ${titleClass}`}>{title}</h2>
                        </>
                    }
                    {content}
                    {contentLinkOtherSide}
                    {contentLink &&
                        <div className='device-only'>
                            {contentLink}
                        </div>
                    }
                    {isInverted && 
                    <div className='gatsby-image-wrapper clear-top-padding'>
                        <img
                        image={cat}
                        className='device-only image-device-only'
                        alt='cat'/>
                    </div>}
                </div>
                {arrowLink}
            </div>
        </div>
        </div>
    );
};

export default ImageContentGrid;

ImageContentGrid.propTypes = {
    title: PropTypes.string,
    titleClass: PropTypes.string,
    content: PropTypes.element,
    contentLink: PropTypes.element,
    contentLinkOtherSide: PropTypes.element,
    backgroundClass: PropTypes.string,
    imageClass: PropTypes.string,
    withBorder: PropTypes.bool,
    arrowLink: PropTypes.element,
    hasCallout: PropTypes.bool,
    calloutOffsetBottom: PropTypes.bool,
    isTitleLink: PropTypes.bool,
    titleLink: PropTypes.string,
    titleNumber: PropTypes.string,
    isInverted: PropTypes.bool,
    colorScheme: PropTypes.string
}

ImageContentGrid.defaultProps = {
    title: '',
    titleClass: '',
    content: <p></p>,
    contentLink: null,
    contentLinkOtherSide: null,
    backgroundClass: '',
    imageClass: '',
    withBorder: false,
    arrowLink: null,
    hasCallout: false,
    calloutOffsetBottom: false,
    isTitleLink: false,
    titleLink: '',
    titleNumber: '',
    isInverted: false,
    colorScheme: 'primary'
}