import React, {useEffect} from 'react';
import AcordionItem from './AcordionItem';
import PropTypes from 'prop-types';

const Accordion = ({items, featuredAccordion = false, titleLinkOffset = false, accordionOffsetName = '', extraHeight = false}) => {
    const accordion = React.useRef(null);
    const [openedIndex, setOpenedIndex] = React.useState(0);
    const [maxHeight, setMaxHeight] = React.useState(0);
    const [defaultItemContent, setDefaultItemContent] = React.useState(0);
    const [accordionStartHeight, setAccordionStartHeight] = React.useState(0);
    const linkLineHeightDiff = 17;

    const updateMaxHeight = (newMaxHeight) => {
        setMaxHeight((current) => newMaxHeight > current ? newMaxHeight : current);
    };
    const recountAccordionStartHeight = () => setAccordionStartHeight(0);

    useEffect(() => {
        if (accordion.current && accordionStartHeight === 0) {
            setAccordionStartHeight(accordion.current.scrollHeight);
        }
    }, [accordionStartHeight, defaultItemContent, maxHeight]);

    useEffect(() => {
        window.addEventListener('resize', recountAccordionStartHeight);
        return () => window.removeEventListener('resize', recountAccordionStartHeight);
    }, []);

    const accordionTotalHeight = accordionStartHeight - defaultItemContent + maxHeight;

    return (
        <div
            className='accordion'
            style={
                {height: `${titleLinkOffset ? accordionTotalHeight + linkLineHeightDiff
                        : extraHeight ? accordionTotalHeight - 15 : accordionTotalHeight}px`}}
                ref={accordion}
            >
            {items.map(({title, content, link}, index) => {
                const isOpen = openedIndex === index;
                const lessIndexClicked = openedIndex > index;

                return (
                    <AcordionItem
                        lesserIndex={lessIndexClicked}
                        accordionOffsetName={accordionOffsetName}
                        title={title}
                        isOpen={isOpen}
                        featuredAccordion={featuredAccordion}
                        content={content}
                        onClick={() => setOpenedIndex(index)}
                        key={title}
                        link={link}
                        updateMaxHeight={updateMaxHeight}
                        updateOpenedHeight={setDefaultItemContent}
                    />
                );
            })}
        </div>
    );
};

export default Accordion;

Accordion.propTypes = {
    items: PropTypes.array,
    featuredAccordion: PropTypes.bool,
    titleLinkOffset: PropTypes.bool,
    accordionOffsetName: PropTypes.string,
    extraHeight: PropTypes.bool,
}

Accordion.defaultProps = {
    items: [],
    featuredAccordion: false,
    titleLinkOffset: false,
    accordionOffsetName: '',
    extraHeight: false,
};

