import '../styles/index.scss';
import LinkArrow from './LinkArrow';
import PropTypes from 'prop-types';
import Paragraph from './Paragraph';
import List from './List';

const IconTitleColumns = ({
    iconTitleColumnsClass = '',
    number = 1,
    children}) => {
    return (
        <div className={`icon-title-columns columns-${number} ${iconTitleColumnsClass}`}>
            {children}
        </div>
    );
};

const IconTitleColumnsContent = ({title, link, text, listItems, titleClass, icon, isMarkedList, titleTextClass, colorScheme}) => {
    return (
    <div key={title} className='icon-title-item'>
        {link?
            <a className={`icon-title ${titleClass}`} to={link}><p> {icon && icon} {title && <span>{title}</span>}</p></a> :
            <p className={`icon-title ${titleClass}`}>
                {icon && icon}
                {title && <span>{title}</span>}
            </p>
        }
        {!isMarkedList ?
            <>
                {listItems && listItems.map((value) => (
                    <p key={value} className='icon-title-paragraph icon-title-list'>{value}</p>
                ))}
                {text &&
                <p className={`icon-title-paragraph ${titleTextClass}`}>{text}</p>
                }
            </> :
            <>
                {text && <Paragraph item={text}/>}
                {listItems && <List items={listItems} listClass='list-top-padding' colorScheme={colorScheme}/>}
                {link && <LinkArrow link={link} colorScheme={colorScheme}/>}
            </>
        }
    </div>
    )
}

export {IconTitleColumns, IconTitleColumnsContent};

IconTitleColumns.propTypes = {
    items: PropTypes.object,
    iconTitleColumnsClass: PropTypes.string,
    titleTextClass: PropTypes.string,
    titleClass: PropTypes.string,
    isMarkedList: PropTypes.bool,
    colorScheme: PropTypes.string,
    number: PropTypes.number,
}

IconTitleColumns.defaultProps = {
    items: {},
    iconTitleColumnsClass: '',
    titleTextClass: '',
    titleClass: '',
    isMarkedList: false,
    colorScheme: 'primary',
    number: 3,
}