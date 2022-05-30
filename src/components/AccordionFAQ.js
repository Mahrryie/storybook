import React, {useState} from 'react';
import PropTypes from 'prop-types';

const AccordionFAQ = ({items, colorScheme = 'primary'}) => {
    let color;

    if (colorScheme == 'primary') {
        color = '#FF04D5';
    } else if (colorScheme == 'secondary') {
        color = '#F8374E';
    } else if (colorScheme == 'tertiary') {
        color = '#FB7700';
    } else if (colorScheme == 'quaternary') {
        color = '#21E0DD';
    } 
    return (
        <div className={`accordion accordion-faqs ${colorScheme}-primary`}>
            {items.map(({title, text, content}, index) => {
                return (
                    <AccordionFAQContent title={title} text={text} content={content} key={index} color={color}/>
                );
            })}
        </div>
    );
};

export default AccordionFAQ;

const AccordionFAQContent = ({title, text, content, color}) => {
    const [open, setOpen] = useState(false);

    return (
        <div className='accordion-item'>
            <div className='accordion-title-wrap' onClick={() => setOpen(!open)}>
                <div className='accordion-icon accordion-icon-faqs'>{open ? <svg width='24' height='4' viewBox='0 0 24 4' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M2 2L22 2' stroke={color} stroke-width='3' stroke-linecap='round' stroke-linejoin='round'/>
                    </svg>
                    :<svg width='52' height='52' viewBox='0 0 52 52' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M26 36V16' stroke={color} stroke-width='3' stroke-linecap='round' stroke-linejoin='round'/>
                    <path d='M16 26L36 26' stroke={color} stroke-width='3' stroke-linecap='round' stroke-linejoin='round'/>
                    </svg>}
                </div>
                <h4 className='accordion-faqs-title'>{title}</h4>
            </div>
            {open ? (<div className='accordion-content'>
                <p className='accordion-faqs-text'>{text}</p>
                {content}
            </div>) : null}
        </div>
    )
}

AccordionFAQ.propTypes = {
    items: PropTypes.array,
    colorScheme: PropTypes.string,
}

AccordionFAQ.defaultProps = {
    items: [],
    colorScheme: 'primary'
};


