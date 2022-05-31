import React from 'react';

const InformationText = () => {
    const DROP_US_A_LINE =
        'Drop us a line about your project at ';
    const EMAIL = 'info@itransition.com';
    const CONTACT_FORM =
        ' or via the contact form below, and we will contact you within a business day.';
    const WE_KEEP_IT_CONFIDENTIAL =
        'All submitted information will be kept confidential.';

    return (
        <>
            <div className='main-grid-halved-item information-text'>
                <span className='information-text'>{DROP_US_A_LINE}</span>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                <span className='information-text'>{CONTACT_FORM}</span>
            </div>
            <div className='main-grid-halved-item information-text'>
                {WE_KEEP_IT_CONFIDENTIAL}
            </div>
        </>
    );
};

export default InformationText;
