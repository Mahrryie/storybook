import CopyAccordion from '../components/CopyAccordion';

export default {
    title: 'Accordion/CopyAccordion',
    component: CopyAccordion,
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
        paragraphClass: {
            type: 'string',
            description: 'Sets header description CSS class',
            options: ['', 'medium-bold'],
            control: {
                type: 'select'
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
      }
}

const Template = (args) => (
    <CopyAccordion {...args}/>
);

export const Default = Template.bind({});
Default.args = {
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
    calloutItem: {
        field_title: "Contact us",
        field_description: {
            value: 'Ready to start working with us'
        },
        field_secondary_description: "Let's go",
    },
    paragraphClass: '',
    extraContent: <p>Extra content. You can put here anything you like. A table or a quote, or additional description. For image input it's better to use CopyImageAccordion</p>,
    noBackgroundNeeds: true,
    containerClass: 'has-half-cta-inside cta-overhang',
    calloutClass: '',
    colorScheme: 'primary',
};