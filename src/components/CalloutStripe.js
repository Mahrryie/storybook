import React from 'react';
import PropTypes from 'prop-types';
import ContainerDefault from './ContainerDefault';

const CalloutStripe = ({item, containerClass = '', colorScheme = ''}) => {
    return (
        <div className={`${colorScheme}-scheme`}>
        <div className={`cta ${containerClass}`}>
            <div className='callout-stripe-copy'>
                <div className='callout-stripe-text'>
                    <h4 className='callout-stripe-title'>{item.field_description.value}</h4>
                    {item.field_secondary_description && <p className='callout-stripe-paragraph'>{item.field_secondary_description}</p>}
                </div>
            </div>
            <a href='contact-form-container' key={item.field_title} className='callout-stripe-button'>
                <span>{item.field_title}</span>
                <svg className='icon-arrow-svg' width='28' height='26' viewBox='0 0 28 26' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M15 2L26 13M26 13L15 24M26 13L2 13' stroke='white' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/>
                </svg>
            </a>
        </div>
        </div>
    );
};

const CalloutStripeSmall = ({item, calloutClass = '', colorScheme=''}) => {
    return (
        <>
        <div className='has-half-cta-after' style={{height: '200px'}}/>
        <ContainerDefault containerClass={`section container half-callout-wrapper ${colorScheme}-scheme`}>
            <div className={`cta-small ${calloutClass}`}>
            <div className='callout-stripe-copy-small'>
                <div className='callout-stripe-text'>
                    <h4 className='callout-stripe-title'>{item.field_description.value}</h4>
                    {item.field_secondary_description && <p className='callout-stripe-paragraph'>{item.field_secondary_description}</p>}
                </div>
            </div>
            <a href='contact-form-container' key={item.field_title} className='callout-stripe-button-small'>
                <span>{item.field_title}</span>
                <svg className='icon-arrow-svg' width='28' height='26' viewBox='0 0 28 26' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M15 2L26 13M26 13L15 24M26 13L2 13' stroke='white' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/>
                </svg>
            </a>
        </div>
        </ContainerDefault>
        </>
    );
};

export {CalloutStripe, CalloutStripeSmall};

CalloutStripe.propTypes = {
    colorScheme: PropTypes.string,
    item: PropTypes.object,
    containerClass: PropTypes.string,
}

CalloutStripeSmall.propTypes = {
    colorScheme: PropTypes.string,
    item: PropTypes.object,
    calloutClass: PropTypes.string,
}

CalloutStripe.defaultProps = {
    colorScheme: '',
    item: {},
    containerClass: '',
};

CalloutStripeSmall.defaultProps = {
    colorScheme: '',
    item: {},
    calloutClass: '',
};