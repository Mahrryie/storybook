import React, {useRef} from 'react';
import AccordionItemContent from './AccordionItemContent';

let scrollPos = 0;
let scrollUp;
const mobileWidth = 477;
const tabletScrollOffset = -560;
const mobileScrollOffset = -900;
const laptopWidth = 1440;
const desktopWidth = 1920;

if (typeof window !== 'undefined') {
    window.addEventListener('scroll', function(){
        scrollUp = (document.body.getBoundingClientRect()).top > scrollPos;
        scrollPos = (document.body.getBoundingClientRect()).top;
    });
}

function handleScrollUp(offset, name) {
    const yOffset = offset;
    const y = name.current?.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({top: y, behavior: 'smooth'});
}

function handleButtonClick(name, isLess) {
    if (typeof window !== 'undefined') {
        if (name.current?.classList.contains('blockchain') && !scrollUp && window.innerWidth <= mobileWidth) {
            if (isLess) {
                name.current?.scrollIntoView({block: 'center', behavior: 'smooth', inline: 'center'});
            } else {
                handleScrollUp(mobileScrollOffset, name);
            }
        } else if (name && window.innerWidth == desktopWidth) {
            name.current?.scrollIntoView({block: 'center', behavior: 'smooth', inline: 'nearest'});
        } else if (name && window.innerWidth <= laptopWidth) {
            if (name.current?.classList.contains('blockchain')) {
                if (isLess) {
                    name.current?.scrollIntoView({block: 'center', behavior: 'smooth', inline: 'nearest'});
                } else {
                    handleScrollUp(tabletScrollOffset, name);
                }
            } else {
                if (isLess) {
                    name.current?.scrollIntoView({block: 'start', behavior: 'smooth'});
                } else {
                    handleScrollUp(tabletScrollOffset, name);
                }
            }
        } else {
            return;
        }
    }
}

function renderAccordionTitle(
    featuredAccordion,
    title,
    onClick,
    lesserIndex,
    ref,
    link,
    color
) {
    if (link) {
        return (
            <h4 className={`accordion-title ${featuredAccordion ? 'featured' :  ''}`} onClick={() => {
                onClick();
                handleButtonClick(ref, lesserIndex);
            }} ref={ref}>
                <a className='accordion-title-link' to={link}>
                    <span className='title'>{title}</span>
                    <div className='link-arrow-small'>
                        <svg className='icon-arrow-svg' width='28' height='26' viewBox='0 0 28 26'  xmlns='http://www.w3.org/2000/svg'>
                            <path d='M15 2L26 13M26 13L15 24M26 13L2 13' stroke={color} stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/>
                        </svg>
                    </div>
                </a>
            </h4>
        );
    } else {
        return (
            <h4 className={`accordion-title ${featuredAccordion ? 'featured' :  ''}`} onClick={() => {
                onClick();
                handleButtonClick(ref, lesserIndex);
            }} ref={ref}>
                <span className='title'>{title}</span>
            </h4>
        );
    }
}

const AccordionItem = ({title, isOpen, featuredAccordion, onClick, content, link, updateMaxHeight, updateOpenedHeight, accordionOffsetName = '', lesserIndex, color}) => {

    const articleRef = useRef(null);
    console.log(color)

    return (
        <div
            key={title}
            className={`${isOpen ? 'accordion-item opened' : 'accordion-item'} ${accordionOffsetName} ${lesserIndex ? 'smaller-index-offset' : ''}`}
            ref={articleRef}
        >
            {renderAccordionTitle(featuredAccordion, title, onClick, lesserIndex, articleRef, link, color)}
            <AccordionItemContent
                key={title}
                content={content}
                isOpen={isOpen}
                updateMaxHeight={updateMaxHeight}
                updateOpenedHeight={updateOpenedHeight}
            />
            <div className='accordion-icon' onClick={() => {
                onClick();
                handleButtonClick(articleRef, lesserIndex);
            }}>
                <svg className='icon-chevron-svg' width='26' height='14' viewBox='0 0 26 14' fill='white' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M24 2L13 12L2 2' stroke-width='4' stroke={color} stroke-linecap='round' stroke-linejoin='round'/>
                </svg>
            </div>
        </div>
    );
};

export default AccordionItem;
