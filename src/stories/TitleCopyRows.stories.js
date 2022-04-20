import TitleCopyRows from '../components/TitleCopyRows';

export default {
    title: 'Titles/CopyRows',
    component: TitleCopyRows,
    argTypes: {
        colorScheme: {
            type: 'string',
            description: 'NOT A PROP! In prod environment sets background color according to a page color scheme. Used here for a visionary purpose',
            defaultValue: 'primary',
            options: ['primary', 'secondary', 'tertiary', 'quaternary'],
            control: {
                type: 'radio'
            }
        },
        titleNumber: {
            type: 'string',
        }
    }
}

const Template = (args) => (
    <TitleCopyRows {...args}/>
);

export const Default = Template.bind({});
Default.args = { 
    items: [{
        field_title: 'Business process management',
        field_description: {
            value: 'Itransition provides business process management consulting and development services to help enterprises step up their business operations. We help our customers plan the digital transformation of their business workflows, select and integrate business process automation software tailored to their specific corporate environments.'
        },
    }],
    titleNumber: '',
    containerClass: '',
    titleClass: 'String',
    paragraphClass: 'String',
    colorScheme: 'primary'
};

export const withLink = Template.bind({});
withLink.args = { 
    items: [{
        field_title: 'Business process management',
        field_description: {
            value: 'Itransition provides business process management consulting and development services to help enterprises step up their business operations. We help our customers plan the digital transformation of their business workflows, select and integrate business process automation software tailored to their specific corporate environments.'
        },
        field_link: '/something',
    }],
    titleNumber: '',
    containerClass: '',
    titleClass: 'String',
    paragraphClass: 'String',
    titleLink: true,
    colorScheme: 'primary'
};
