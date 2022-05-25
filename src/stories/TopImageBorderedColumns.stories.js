import TopImageBorderedColumns from '../components/TopImageBorderedColumns'
import Img1 from '../assets/emr-ehr-mobile.jpg';
import Img2 from '../assets/mountain.jpg';
import Img3 from '../assets/cat5.jpg';
import LinkArrow from '../components/LinkArrow';

export default {
    title: 'TopImageBorderedColumns',
    component: TopImageBorderedColumns,
    argTypes: {
        twoRows: {
            type: 'boolean',
            description: 'Sets the grid in two rows by two items',
        },
        colorScheme: {
            type: 'string',
            description: 'NOT A PROP! In prod environment sets background color according to a page color scheme. Used here for a visionary purpose',
            defaultValue: 'primary',
            options: ['primary', 'secondary', 'tertiary', 'quaternary'],
            control: {
                type: 'radio'
            }
        },
    }
}

const Template = (args) => <TopImageBorderedColumns {...args}/>

export const Default = Template.bind({});
Default.args = {
    items: [{
        title: 'Integration consulting',
        subText: 'We provide',
        content: <>
            <p>Itransition’s consultants will run an independent review of your technologies and solutions in use. Following this, we will propose feasible adjustments to your BS and OS systems, toolset and workflows, aimed at curbing excess spending, ramping up efficiency, and meeting your particular business goals.</p>
                <LinkArrow link='/healthcare'/>
        </>,
        image: Img1,
        titleCustomNumber: 1,
    },
    {
        title: 'Connectivity setup',
        subText: 'We provide',
        content: <>
            <p>
Our team helps you decide on the IoT connectivity protocols appropriate for your use case, taking into account the target coverage range and types of devices.</p>
                <LinkArrow link='/healthcare'/>
        </>,
        image: Img2,
        titleCustomNumber: 1,
    },
    {
        title: 'Prototyping',
        subText: 'We provide',
        content: <>
            <p>
            We build interactive prototypes consisting of an operable user interface and backend, with connectivity protocols in place, to validate your project assumptions.</p>
            <LinkArrow link='/healthcare'/>
        </>,
        image: Img3,
        titleCustomNumber: 1,
    }],
    titleClass: '',
    containerClass: '',
    titleCustomClass: '',
    imageClass: '',
    titleLinkArrow: false,
    gridAdditionalClass: '',
    colorScheme: 'primary'
};