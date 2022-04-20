import React from 'react';
import PropTypes from 'prop-types';
import '../styles/index.scss';

const CopyAccordion = ({
    titleCopyRowsItems,
    paragraphClass,
    accordionItems,
    noBackgroundNeeds = false,
    containerClass = '',
    extraContent,
    calloutClass,
    calloutItem
}) => {
    return (
        <div className={`wrapped-grid section background-light-gray ${containerClass}`}>
            <div className={`halved-content-image-item ${!noBackgroundNeeds && 'background-theme'}`}>
                {titleCopyRowsItems || extraContent &&
                <div className='inner-content'>
                    <div className='container-small'>
                        <TitleCopyRows items={titleCopyRowsItems} paragraphClass={paragraphClass}/>
                        {extraContent}
                    </div>
                </div>
                }
            </div>
            <div className='halved-content-item'>
                <Accordion items={accordionItems}/>
                {calloutItem &&
                    <CalloutStripeSmall item={calloutItem} calloutClass={calloutClass}/>
                }
            </div>
        </div>
    );
};

export default CopyAccordion;

CopyAccordion.propTypes = {
    leftContent: PropTypes.element,
    rightContent: PropTypes.element,
    gridClass: PropTypes.string,
    invertBackground: PropTypes.bool,
    leftClass: PropTypes.string,
    rightClass: PropTypes.string,
    backgroundLightGray: PropTypes.bool,
    schemeColor: PropTypes.string,
}

CopyAccordion.defaultProps = {
    leftContent: Element,
    rightContent: Element,
    gridClass: String,
    invertBackground: Boolean,
    leftClass: String,
    rightClass: String,
    backgroundLightGray: Boolean,
    schemeColor: String,
}