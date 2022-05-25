import React, {useRef} from 'react';
import AcordionItemContent from './AcordionItemContent';

function renderAccordionTitle(
    featuredAccordion,
    title,
    onClick,
    lesserIndex,
    ref,
    link,
) {
    if (link) {
        return (
            <h4 className={`accordion-title ${featuredAccordion ? 'featured' :  ''}`} onClick={() => {
                onClick();
            }} ref={ref}>
                <a className='accordion-title-link' href={link}>
                    <span className='title'>{title}</span>
                    <div className='link-arrow-small'>
                        <svg className='icon-arrow-svg' width='28' height='26' viewBox='0 0 28 26' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path d='M15 2L26 13M26 13L15 24M26 13L2 13' stroke='white' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/>
                        </svg>
                    </div>
                </a>
            </h4>
        );
    } else {
        return (
            <h4 className={`accordion-title ${featuredAccordion ? 'featured' :  ''}`} onClick={() => {
                onClick();
            }} ref={ref}>
                <span className='title'>{title}</span>
            </h4>
        );
    }
}

const AccordionItem = ({title, isOpen, featuredAccordion, onClick, content, link, updateMaxHeight, updateOpenedHeight, accordionOffsetName = '', lesserIndex}) => {

    const articleRef = useRef(null);

    return (
        <div
            key={title}
            className={`${isOpen ? 'accordion-item opened' : 'accordion-item'} ${accordionOffsetName} ${lesserIndex ? 'smaller-index-offset' : ''}`}
            ref={articleRef}
        >
            {renderAccordionTitle(featuredAccordion, title, onClick, lesserIndex, articleRef, link)}
            <AcordionItemContent
                key={title}
                content={content}
                isOpen={isOpen}
                updateMaxHeight={updateMaxHeight}
                updateOpenedHeight={updateOpenedHeight}
            />
            <div className='accordion-icon' onClick={() => {
                onClick();
            }}>
                <svg className='icon-chevron-svg' width='26' height='14' viewBox='0 0 26 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M24 2L13 12L2 2' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/>
                </svg>z
            </div>
        </div>
    );
};

export default AccordionItem;
