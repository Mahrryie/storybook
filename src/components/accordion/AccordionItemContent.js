import React, {useEffect, useState} from 'react';

const AccordionItemContent = ({isOpen, content, updateMaxHeight, updateOpenedHeight}) => {
    const accordionInner = React.useRef();
    const [width, setWidth] = useState(0);

    useEffect(() => {
        setWidth(window.innerWidth);

        if (accordionInner.current) {
            if (isOpen) {
                accordionInner.current.style.maxHeight = `${accordionInner.current.scrollHeight}px`;
            } else {
                accordionInner.current.style.maxHeight = '0px';
            }
        }
        function handleWindowSizeChange() {
            setWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        };
    }, [isOpen, width, []]);

    useEffect(() => {
        if (accordionInner.current) {
            const accordionInnerChild = accordionInner.current.children[0];

            console.log(accordionInner.current.children)

            // console.log(accordionInnerChild.scrollHeight)

            // if (isOpen) {
            //     updateOpenedHeight(accordionInnerChild.scrollHeight);
            // }

            // const accordionAnimationEndTime = 500;
            // const timer = setTimeout(() => {
            //     if (accordionInnerChild) {
            //         updateMaxHeight(accordionInnerChild.scrollHeight);
            //     }
            // }, accordionAnimationEndTime);
            // return () => clearTimeout(timer);
        }
    }, []);

    return (
        <div
            ref={accordionInner}
            className={`${isOpen ? 'accordion-content opened' : 'accordion-content'}`}>
            {content}
        </div>
    );
};

export default AccordionItemContent;
