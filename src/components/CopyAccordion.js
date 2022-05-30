import React from 'react';
import PropTypes from 'prop-types';
import Accordion from './accordion/Accordion';

const CopyAccordion = ({
    titleCopyRowsItems,
    paragraphClass,
    accordionItems,
    noBackgroundNeeds = false,
    containerClass = '',
    extraContent,
    calloutClass,
    calloutItem,
    colorScheme = 'primary',
}) => {
    // const titleCopyRowsItemsContent = [{field_title: 'Test', field_description: {value: 'ndsncsn'}}]
    return (
        <div className={`wrapped-grid section background-light-gray ${containerClass} ${colorScheme}-scheme`}>
            <div className={`halved-content-image-item ${!noBackgroundNeeds && 'background-theme'}`}>
                <div className='inner-content'>
                    <div className='container-small'>
                        <div className={`title-copy-rows`}>
                            <h2 className={`title `}>Our financial software solutions</h2>
                            <p className={`paragraph ${paragraphClass}`}>Itransition’s team delivers tailored solutions to automate organizations’ financial workflows and provide end customers with smart and secure financial applications for individual use.</p>
                        </div>
                        {extraContent}
                    </div>
                </div>
            </div>
            <div className='halved-content-item'>
                <Accordion items={accordionItems} colorScheme={colorScheme}/>
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

export default CopyAccordion;

CopyAccordion.propTypes = {
    paragraphClass: PropTypes.string,
    accordionItems: PropTypes.array,
    noBackgroundNeeds: PropTypes.bool,
    containerClass: PropTypes.string,
    extraContent: PropTypes.element,
    calloutClass: PropTypes.string,
    calloutItem: PropTypes.object,
    colorScheme: PropTypes.string,
}

CopyAccordion.defaultProps = {
    paragraphClass: '',
    accordionItems: [],
    noBackgroundNeeds: false,
    containerClass: '',
    extraContent: null,
    calloutClass: '',
    calloutItem: {},
    colorScheme: 'primary',
}