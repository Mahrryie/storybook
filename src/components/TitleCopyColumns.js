import '../styles/index.scss';
import PropTypes from 'prop-types';
import TitleLink from './TitleLink';
import List from './List';

const TitleCopyColumns = ({
    items,
    titleCopyClass = '',
    titleClass = '',
    listItems,
    titleNumber = '',
    isBold = true,
    noPaddingTop = false,
    isSingle = false,
    isTitleLink = false,
    isInCopyBoxes = false,
    colorScheme
}) => {
    return (
        <div className={`title-copy-columns ${titleCopyClass} ${isSingle ? 'single' : ''} ${isInCopyBoxes ? 'in-copy-boxes' : ''} ${colorScheme}-scheme`}>
            {items.map(({field_title, field_description, field_link}) => (
                <div key={field_title} className='main-grid'>
                    <div className='main-grid-item'>
                        {(field_link && isTitleLink) ?
                            <>
                                {titleNumber && <span className='title-number'>{titleNumber} </span>}
                                <TitleLink title={field_title} link={field_link} titleClass={titleClass} colorScheme={colorScheme}/>
                            </> :
                            <h2 className={titleClass}>
                                {titleNumber && <span className='title-number'>{titleNumber} </span>}
                                {field_title}
                            </h2>
                        }
                    </div>
                    <div className='main-grid-item'>
                        <p className={`${noPaddingTop ? 'paragraph-no-padding-top' : ''} ${isBold ? 'paragraph-bolder' : 'paragraph'}`}>{field_description.value}</p>
                        {listItems && <List listClass='columns-two' items={listItems}/>}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TitleCopyColumns;

TitleCopyColumns.propTypes = {
    items: PropTypes.object,
    titleCopyClass: PropTypes.string,
    titleClass: PropTypes.string,
    colorScheme: PropTypes.string,
    listItems: PropTypes.array,
    titleNumber: PropTypes.number,
    isBold: PropTypes.bool,
    noPaddingTop: PropTypes.bool,
    isSingle: PropTypes.bool,
    isTitleLink: PropTypes.bool,
    isInCopyBoxes: PropTypes.bool
}

TitleCopyColumns.defaultProps = {
    items: {},
    titleCopyClass: '',
    titleClass: '',
    colorScheme: 'primary',
    listItems: [],
    titleNumber: null,
    isBold: true,
    noPaddingTop: false,
    isSingle: true,
    isTitleLink: false,
    isInCopyBoxes: false
}