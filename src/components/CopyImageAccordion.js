import React from 'react';
import PropTypes from 'prop-types';

import TitleCopyRows from './TitleCopyRows';
import Accordion from './accordion/Accordion';
import TitleSecond from './TitleSecond';

const CopyImageAccordion = ({
    titleLinkOffset = false,
    titleCopyRowsItems,
    titleAlone,
    accordionItems,
    titleNumber,
    imageName,
    calloutItem,
    noBackgroundNeeds = false,
    containerClass = '',
    titleClass = '',
    calloutClass,
    link = '',
    paragraphClass = '',
    contentOptional,
    hasCalloutAbove = false,
    backgroundLightGray = true,
    accordionOffsetName = '',
    extraHeight = false,
    colorScheme = 'primary'}) => {
    return (
        <div className={`wrapped-grid section ${backgroundLightGray ? 'background-light-gray' : '' } ${containerClass} copy-image-accordion ${colorScheme}-scheme`}>
            <div className={`halved-content-image-item ${noBackgroundNeeds ? '' : 'background-theme'}`}>
                {(titleCopyRowsItems || contentOptional) &&
                    <div className={`inner-content ${hasCalloutAbove ? 'has-callout-before' : ''}`}>
                        <div className='container-small'>
                            {titleCopyRowsItems &&
                                <TitleCopyRows
                                    titleNumber={titleNumber}
                                    items={titleCopyRowsItems}
                                    titleClass={titleClass}
                                    field_link={link}
                                    paragraphClass={paragraphClass}
                                />
                            }
                            {contentOptional}
                        </div>
                    </div>
                }
                {titleAlone &&
                    <div className='inner-content'>
                        <div className='container-small title-alone'>
                            <TitleSecond title={titleAlone}/>
                        </div>
                    </div>
                }
                <div className='gatsby-image-wrapper clear-top-padding inner-image'>
                    <img src={imageName}/>
                </div>
            </div>
            <div className='halved-content-item halved-content-item-accordion'>
                <Accordion items={accordionItems} titleLinkOffset={titleLinkOffset} accordionOffsetName={accordionOffsetName} extraHeight={extraHeight}/>
                {calloutItem &&
                    <div className={`cta-small ${calloutClass}`}>
                        <div className='callout-stripe-copy-small'>
                            <div className='callout-stripe-text'>
                                <h4 className='callout-stripe-title'>{calloutItem.field_description.value}</h4>
                                {calloutItem.field_secondary_description && <p className='callout-stripe-paragraph'>{calloutItem.field_secondary_description}</p>}
                            </div>
                        </div>
                        <a href='contact-form-container' key={calloutItem.field_title} className='callout-stripe-button-small'>
                            <span>{calloutItem.field_title}</span>
                            <svg className='icon-arrow-svg' width='28' height='26' viewBox='0 0 28 26' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                <path d='M15 2L26 13M26 13L15 24M26 13L2 13' stroke='white' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/>
                            </svg>
                        </a>
                    </div>
                }
            </div>
        </div>
    );
};

export default CopyImageAccordion;

CopyImageAccordion.propTypes = {
    titleLinkOffset: PropTypes.bool,
    titleCopyRowsItems: PropTypes.array,
    titleAlone: PropTypes.string,
    accordionItems: PropTypes.array,
    titleNumber: PropTypes.string,
    imageName: PropTypes.string,
    calloutItem: PropTypes.object,
    noBackgroundNeeds: PropTypes.bool,
    containerClass: PropTypes.string,
    titleClass: PropTypes.string,
    calloutClass: PropTypes.string,
    paragraphClass: PropTypes.string,
    contentOptional: PropTypes.element,
    hasCalloutAbove: PropTypes.bool,
    backgroundLightGray: PropTypes.bool,
    accordionOffsetName: PropTypes.string,
    extraHeight: PropTypes.bool,
    colorScheme: PropTypes.string,
}

CopyImageAccordion.defaultProps = {
    titleLinkOffset: false,
    titleCopyRowsItems: [],
    titleAlone: null,
    accordionItems: [],
    titleNumber: '',
    imageName: '',
    calloutItem: {},
    noBackgroundNeeds: false,
    containerClass: '',
    titleClass: '',
    calloutClass: '',
    paragraphClass: '',
    contentOptional: null,
    hasCalloutAbove: false,
    backgroundLightGray: true,
    accordionOffsetName: '',
    extraHeight: false,
    colorScheme: 'primary',
}