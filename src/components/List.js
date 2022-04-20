import '../styles/index.scss';
import PropTypes from 'prop-types';

const List = ({items, listClass = '', listTitle, colorScheme = 'primary'}) => {
    return (
        <>
            {listTitle && <h6 className='list-title medium-bold'>{listTitle}</h6>}
            <ul className={`list ${listClass} ${colorScheme}-scheme`}>
                {items.map((value) => (
                    <li key={value} className='list-item'>
                        {value}
                    </li>
                ))}
            </ul>
        </>
    );
};

export default List;

List.propTypes = {
    items: PropTypes.object,
    listTitle: PropTypes.string,
    listClass: PropTypes.string,
    colorScheme: PropTypes.string,
}

List.defaultProps = {
    items: {},
    listTitle: '',
    listClass: '',
    colorScheme: '',
}