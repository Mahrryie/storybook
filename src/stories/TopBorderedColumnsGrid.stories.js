import TopBorderedColumnsGrid from '../components/TopBorderedColumnsGrid'
import LinkArrow from '../components/LinkArrow';

export default {
    title: 'TopBorderedColumnsGrid',
    component: TopBorderedColumnsGrid,
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

const Template = (args) => <TopBorderedColumnsGrid {...args}/>

export const Default = Template.bind({});
Default.args = {
    items: [{
        title: 'Technology consulting', 
        link: '/something',
        content: <>
        <p>Itransition’s consultants will run an independent review of your technologies and solutions in use. Following this, we will propose feasible adjustments to your BS and OS systems, toolset and workflows, aimed at curbing excess spending, ramping up efficiency, and meeting your particular business goals.</p>
        <LinkArrow link='/healthcare'/>
        </>
    },
    {
        title: 'Third-party integration', 
        link: '/something',
        content: 
        <>
        <p>To extend or augment your telecom ecosystem without time-consuming custom development, our team will hand-pick appropriate off-the-shelf solutions and integrate them with your infrastructure. Our services cover API and ESB integrations with a wide range of operation- and business-layer tools. We also perform initial configurations to ensure new tools operate and communicate with the connected software as intended.</p>
        <LinkArrow link='/healthcare'/>
        </>
    },
    {
        title: 'Quality assurance',
        content: <p>Our specialists will test your digital environment to make it fully compliant with the industry’s operational and security requirements. Following a QA strategy, we will assess the functionality, performance, and security, as well as assure the quality of more specific aspects: connectivity protocols, third-party service integrations, and more.</p>
    },
    {
        title: 'Infrastructure management', 
        link: '/something',
        content: 
        <>
            <p>Our maintenance team will help your telecom enterprise keep up with the quality requirements and ensure uninterrupted availability and faultless operation of your services. In line with the ISO FCAPS framework, we will monitor the network for faults, fix occurring disruptions, control system configurations, keep track of user statistics, and maintain the security of your network environment.</p>
            <LinkArrow link='/healthcare'/>
        </>
    }],
    blockTitle: '',
    titleClass: '',
    containerClass: '',
    blockTitleClass: '',
    titleCustomNumber: null,
    isCounter: false,
    gridAdditionalClass: '',
    noBorderTop: false,
    twoRows: false,
    twoRowsByThree: '',
    colorScheme: 'primary',
};