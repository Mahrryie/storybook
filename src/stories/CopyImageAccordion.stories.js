import CopyImageAccordion from '../components/CopyImageAccordion';
import Img from '../assets/healthcare-iot-related.jpg';

export default {
    title: 'Accordion/CopyImageAccordion',
    component: CopyImageAccordion,
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
        containerClass: {
            type: 'string',
            description: 'Sets accordion container CSS class',
            default: 'has-half-cta-inside',
            options: ['', 'has-half-cta-inside', 'has-half-cta-inside cta-overhang'],
            control: {
                type: 'select'
            }
        },
        paragraphClass: {
            type: 'string',
            description: 'Sets header description CSS class',
            options: ['', 'medium-bold'],
            control: {
                type: 'select'
            }
        },
        titleClass: {
            type: 'string',
            description: 'Sets title header CSS class',
            options: ['', 'second-level-title', 'third-level-title', 'fourth-level-title', 'fifth-level-title'],
            control: {
                type: 'select'
            }
        },
        titleNumber: {
            type: 'string',
            description: 'Sets counter before title in header'
        },
    }

}

const Template = (args) => (
    <CopyImageAccordion {...args}/>
);

export const Default = Template.bind({});
Default.args = {
    titleLinkOffset: false,
    titleAlone: null,
    accordionItems: [{
        title: "Architecture design",
        content: <p>We build application architectures from the ground up, including multi-tenant ones, paying special attention to their scalability and resilience.'</p>,
    },
    {
        title: "SaaS optimization",
        content: <p>Our team of expert technical consultants and business analysts will help you get the most value out of your existing cloud-based product.</p>,
        link: '/healthcare'
    },
    {
        title: "SaaS-based mobile development",
        content: <p> We deliver robust mobile solutions compatible with every platform to help you engage more customers and diversify your offering.</p>,
        link: '/healthcare'
    },
    {
        title: "Consulting",
        content: <p> We will put your software through rigorous testing to ensure its highest level of security and stable performance under regular and peak load </p>,
        link: '/healthcare'
    }],
    titleNumber: null,
    titleCopyRowsItems: [{field_title: 'Our financial software solutions', field_description: {value: 'Itransition’s team delivers tailored solutions to automate organizations’ financial workflows and provide end customers with smart and secure financial applications for individual use.'}}],
    imageName: Img,
    calloutItem: {
        field_title: "Contact us",
        field_description: {
            value: 'Ready to start working with us'
        },
        field_secondary_description: "Let's go",
    },
    noBackgroundNeeds: false,
    containerClass: 'has-half-cta-inside',
    titleClass: '',
    calloutClass: '',
    paragraphClass: '',
    contentOptional: null,
    hasCalloutAbove: false,
    backgroundLightGray: true,
    accordionOffsetName: '',
    extraHeight: false,
    colorScheme: 'primary',
}

export const TitleAlone = Template.bind({});
TitleAlone.args = {
    titleLinkOffset: false,
    titleAlone: 'Our financial software solutions',
    accordionItems: [{
        title: "Architecture design",
        content: <p>We build application architectures from the ground up, including multi-tenant ones, paying special attention to their scalability and resilience.'</p>,
    },
    {
        title: "SaaS optimization",
        content: <p>Our team of expert technical consultants and business analysts will help you get the most value out of your existing cloud-based product.</p>,
        link: '/healthcare'
    },
    {
        title: "SaaS-based mobile development",
        content: <p> We deliver robust mobile solutions compatible with every platform to help you engage more customers and diversify your offering.</p>,
        link: '/healthcare'
    },
    {
        title: "Testing",
        content: <p> We will put your software through rigorous testing to ensure its highest level of security and stable performance under regular and peak load </p>,
        link: '/healthcare'
    }],
    titleNumber: null,
    imageName: Img,
    calloutItem: {
        field_title: "Contact us",
        field_description: {
            value: 'Ready to start working with us'
        },
        field_secondary_description: "Let's go",
    },
    noBackgroundNeeds: false,
    titleCopyRowsItems: null,
    containerClass: 'has-half-cta-inside',
    titleClass: '',
    calloutClass: '',
    paragraphClass: '',
    contentOptional: null,
    hasCalloutAbove: false,
    backgroundLightGray: true,
    accordionOffsetName: '',
    extraHeight: false,
    colorScheme: 'primary',
}
