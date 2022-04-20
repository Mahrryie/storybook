import TitleCopyColumns from '../components/TitleCopyColumns';

export default {
    title: 'Titles/CopyColumns',
    component: TitleCopyColumns,
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
        isBold: {
            description: 'Sets pararaph bold'
        },
        noPaddingTop: {
            description: 'Removes text top offset'
        },
        isSingle: {
            description: 'Adds offset at the bottom if nothing follows'
        },
        isTitleLink: {
            description: 'Additional check if the link occurs'
        },
        isInCopyBoxes: {
            description: 'Reduces block width if it locates in TitleCopyBoxes extended container'
        }
    }
}

const Template = (args) => (
    <TitleCopyColumns {...args}/>
);

export const Default = Template.bind({});
Default.args = { 
    items: [{
        field_title: 'Business process management',
        field_description: {
            value: 'Itransition provides business process management consulting and development services to help enterprises step up their business operations. We help our customers plan the digital transformation of their business workflows, select and integrate business process automation software tailored to their specific corporate environments.'
        },
    }],
    listItems: null,
    isTitleLink: false,
    titleNumber: null,
    isBold: true, 
    noPaddingTop: false,
    isSingle: false,
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
    listItems: null,
    titleNumber: null,
    isTitleLink: true,
    isBold: false,
    noPaddingTop: false,
    isSingle: true,
    titleClass: '',
    paragraphClass: '',
    colorScheme: 'primary',
    isInCopyBoxes: true
};

export const withList = Template.bind({});
withList.args = { 
    items: [{
        field_title: 'Business process management',
        field_description: {
            value: 'Itransition provides business process management consulting and development services to help enterprises step up their business operations. We help our customers plan the digital transformation of their business workflows, select and integrate business process automation software tailored to their specific corporate environments.'
        },
    }],
    listItems: ['Quick access to a 360-view of each patient',
        'Reduced medical errors',
        'Prevention of duplications or conflicts in prescriptions and treatment plans',
        'Faster emergency care in critical situations',],
    titleClass: 'String',
    titleNumber: null,
    isBold: true,
    noPaddingTop: false,
    isSingle: false,
    paragraphClass: 'String',
    isTitleLink: false,
    colorScheme: 'primary',
    isInCopyBoxes: false
};
