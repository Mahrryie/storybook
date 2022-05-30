import Cards from '../components/Cards';
import RelatedCases1 from '../assets/big-data-analytics-healthcare-related.jpg';
import RelatedCases2 from '../assets/health-wearables-cover-related.jpg';
import RelatedCases3 from '../assets/healthcare-iot-related.jpg';
import RelatedCases4 from '../assets/predictive-modeling-in-healthcare-related.jpg';
import RelatedCases5 from '../assets/rpa-in-healthcare-related.jpg';
import RelatedCases6 from '../assets/the-post-pandemic-future-of-telemedicine-related.jpg';

export default {
    title: 'Related Cases/Cards',
    component: Cards,
    argTypes: {
        colorScheme: {
            type: 'string',
            description: 'NOT A PROP! In prod environment sets color according to a page color scheme. Used here for a visionary purpose',
            defaultValue: 'primary',
            options: ['primary', 'secondary', 'tertiary', 'quaternary'],
            control: {
                type: 'radio'
            }
        },
        items: {
            type: 'array',
            description: 'An array of objects with fileName, title, path, descriptionField, internal properties'
        }
      }
}

const Background = (args) => (
    <Cards {...args}/>
);

export const Default = Background.bind({});
Default.args = { 
    colorScheme: 'primary',
    items: [{
        fileName: {
            articleField: RelatedCases1,
        },
        title: 'Corporate learning portal for PayPal',
        path: 'https://www.itransition.com/portfolio/corporate-learning-portal',
        descriptionField: {
            description: 'This is how Itransition delivered a platform-based new hire training portal for PayPal, helping to reduce the learning curve for newcomers.',
        },
        internal: {
            type: 'Blog'
        }
    },
    {
        fileName: {
            articleField: RelatedCases2,
        },
        title: 'Affiliate network portal for Expedia',
        path: 'https://www.itransition.com/portfolio/corporate-learning-portal',
        descriptionField: {
            description: 'Expedia teamed up with Itransition to revamp the Expedia Affiliate Network solution to redeem the leading position and boost revenues.'
        },
        internal: {
            type: 'Blog'
        }
    },
    {
        fileName: {
            articleField: RelatedCases3,
        },
        title: 'A shoppable video platform for AiBUY',
        path: 'https://www.itransition.com/portfolio/corporate-learning-portal',
        descriptionField: {
            description: 'Find out how Itransition’s dedicated team helped AiBUY release their innovative machine learning-driven shoppable video platform.'
        },
        internal: {
            type: 'Case study'
        }
    },
    {
        fileName: {
            articleField: RelatedCases4,
        },
        title: 'A furniture manufacturing software suite',
        path: 'https://www.itransition.com/portfolio/corporate-learning-portal',
        descriptionField: {
            description: 'Read the story behind Itransition’s 5-year collaboration with a leading UK furniture manufacturer on web, mobile and VR solutions.'
        },
        internal: {
            type: 'Case study'
        }
    },
    {
        fileName: {
            articleField: RelatedCases5,
        },
        title: 'Automated data collection: tools, methods, and current efficacy',
        path: 'https://www.itransition.com/portfolio/corporate-learning-portal',
        descriptionField: {
            description: 'We look at the current approaches to automated data collection and their effectiveness for text, audio and video information extraction.'
        },
        internal: {
            type: 'Case study'
        }
    },
    {
        fileName: {
            articleField: RelatedCases6,
        },
        title: 'RPA in banking: automation made simple',
        path: 'https://www.itransition.com/portfolio/corporate-learning-portal',
        descriptionField: {
            description: 'Learn the most potent use cases for RPA in banking and figure out the best implementation strategies with Itransition.'
        },
        internal: {
            type: 'Blog'
        }
    }]
};

// export const BackgroundLightGray = Background.bind({});
// BackgroundLightGray.args = {
//   containerClass: 'background-light-gray',
//   backgroundColor: 'n'
// };