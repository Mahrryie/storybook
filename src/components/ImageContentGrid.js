import cat from '../assets/cat2.jpeg';
import TitleLink from './TitleLink';

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
    colorScheme}) => {
    return (
        <div className={`section section-image-content main-grid ${backgroundClass} ${isInverted ? 'inverted' : ''} ${colorScheme}-scheme`}>
            <div className='halved-image-item'>
                <img
                    src={cat}
                    alt='cat'
                    className={imageClass}
                    style={{width: '100%'}}
                />
                {contentLink}
                {contentLinkOtherSide &&
                    <div className='device-only'>
                        {contentLinkOtherSide}
                    </div>
                }
            </div>
            <div className={`halved-content-item ${hasCallout ? 'callout-stripe-small-bottom' : ''} ${calloutOffsetBottom ? 'callout-bottom-offset' : ''}`}>
                <div className={`'container-small ${withBorder ? 'container-small-border-top-bottom' : ''}`}>
                    {!isInverted && <img
                        src={cat}
                        className='device-only image-device-only'
                        alt='cat'
                    />}
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
                    {isInverted && <img
                        image={cat}
                        className='device-only image-device-only'
                        alt='cat'
                    />}
                </div>
                {arrowLink}
            </div>
        </div>
    );
};

export default ImageContentGrid;