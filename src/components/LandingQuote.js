import PropTypes from 'prop-types';
import ContainerDefault from './ContainerDefault';

const LandingQuote = ({title, quote, colorScheme}) => {
    return (
        <ContainerDefault>
        <div className={`quote-block background-light-gray ${colorScheme}-scheme`}>
            {title && <h4 className='quote-block-title'>{title}</h4>}
            <div className='quote-block-text'>
                <svg class='quote-svg' width='16' height='11' viewBox='0 0 16 11' fill='none' xmlns='http://www.w3.org/2000/svg' >
                    <path d='M0 10.6H6.08955L8.0398 0H1.95025L0 10.6ZM7.9602 10.6H14.0497L16 0H9.91045L7.9602 10.6Z' fill=''/>
                </svg>
                <p className='medium-bold'>{quote.field_description.value}</p>
            </div>
            <div className='quote-block-author'>
                <div className='quote-block-author-inner'>
                    <p className='quote-block-name medium-bold'>{quote.field_title}</p>
                    <p className='quote-block-position'>{quote.field_position}</p>
                </div>
            </div>
        </div>
        </ContainerDefault>
    )
}

export default LandingQuote;

LandingQuote.propTypes = {
    quote: PropTypes.object,
    title: PropTypes.string,
    colorScheme: PropTypes.string,
}

LandingQuote.defaultProps = {
    quote: {},
    title: '',
    colorScheme: 'primary',
}