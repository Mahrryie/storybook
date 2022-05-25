import React from 'react';
import PropTypes from 'prop-types';

const TopBorderedColumnsGrid = ({
    items,
    blockTitle,
    titleClass = '',
    containerClass = '',
    blockTitleClass = '',
    titleCustomNumber,
    titleCustomClass,
    isCounter = false,
    gridAdditionalClass = '',
    noBorderTop = false,
    twoRows = false,
    twoRowsByThree = '',
    colorScheme = 'primary'}) => {
    return (
        <div className={`top-bordered-columns ${containerClass} ${colorScheme}-scheme`} style={{maxWidth: '1280px', margin: '0 auto'}}>
            {blockTitle && <h3 className={blockTitleClass}>{blockTitle}</h3>}
            <div className={`main-grid ${gridAdditionalClass} ${twoRows ? 'top-bordered-columns-two-rows' : ''} ${twoRowsByThree}`}>
                {items.map(({title, link, content}, index) => (
                    <div key={title} className={`main-grid-item top-bordered-columns-item ${noBorderTop ? 'no-border' : ''}`}>
                        {link ?
                            <a href={link}>
                                {title && <h3 className={`top-bordered-columns-title ${titleClass} ${link ? 'link-hover' : ' '}`}>
                                    {titleCustomNumber &&
                                        <span className={titleCustomClass}>{titleCustomNumber[index].numberContent}</span>
                                    }
                                    {isCounter && <span className='title-number'>{index + 1}. </span>}
                                    {title}
                                </h3>}
                            </a> :
                            title && <h3 className={`top-bordered-columns-title ${titleClass}`}>
                                {titleCustomNumber &&
                                    <span className={titleCustomClass}>{titleCustomNumber[index].numberContent}</span>}
                                {isCounter && <span className='title-number'>{index + 1}. </span>}
                                {title}
                            </h3>
                        }
                        {content}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopBorderedColumnsGrid;

TopBorderedColumnsGrid.propTypes = {
    items: PropTypes.object,
    blockTitle: PropTypes.string,
    titleClass: PropTypes.string,
    containerClass: PropTypes.string,
    blockTitleClass: PropTypes.string,
    titleCustomNumber: PropTypes.array,
    isCounter: PropTypes.bool,
    gridAdditionalClass: PropTypes.string,
    noBorderTop: PropTypes.bool,
    twoRows: PropTypes.bool,
    twoRowsByThree: PropTypes.string,
    colorScheme: PropTypes.string
}

TopBorderedColumnsGrid.defaultProps = {
    items: [],
    blockTitle: '',
    titleClass: '',
    containerClass: '',
    blockTitleClass: '',
    titleCustomNumber: [],
    isCounter: false,
    gridAdditionalClass: '',
    noBorderTop: false,
    twoRows: false,
    twoRowsByThree: '',
    colorScheme: 'primary'
}
