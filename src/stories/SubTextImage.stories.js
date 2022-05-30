import SubTextImage from '../components/SubTextImage';

export default {
    title: 'SubTextImage',
    component: SubTextImage,
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
        percentsSup: {
            type: 'string',
            description: 'Add additional symbols to a circle',
            defaultValue: '',
        }
    }
}

const Template = (args) => <SubTextImage {...args}/>;

export const Default = Template.bind({});
Default.args = {
    items: [{
        field_title: 'of software development experience in the healthcare industry.',
        field_description: {
            value: '20+ years'
        }
    },
    {
        field_title: 'Improved medical data management',
        field_description: {
            value: 'Expertise in '
        }
    },
    {
        field_description: {
            value: 'HIPAA, GDPR, OWASP, and other data security requirements.'
        }
    }],
    containerClass: '',
    titleClass: '',
    percents: ['$25.7B', '53%', '74%'],
    percentsSup: '',
    colorScheme: 'primary'
};
