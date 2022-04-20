import TitleLink from '../components/TitleLink';

export default {
    title: 'Titles/Link',
    component: TitleLink,
    argTypes: {
        title: {
            type: 'string',
            description: 'Set title',
            defaultValue: 'Our Salesforce product expertise',
        },
        colorScheme: {
            type: 'String',
            description: 'NOT a prop! Used for visual purpose',
            control: {
                type: 'radio'
            },
            defaultValue: 'primary',
            options: ['primary', 'secondary', 'tertiary','quaternary']
        },
        titleClass: {
            type: 'String',
            description: 'Set title class',
            options: ['second-level-title', 'third-level-title', 'fourth-level-title'],
            control: {
                type: 'select'
            }
        }
    }
}

const Template = (args) => <TitleLink {...args}/>;

export const Default = Template.bind({});
Default.args = {
    title: 'Our Salesforce product expertise',
    titleClass: '',
    link: '/salesforce',
    titleLinkClass: '',
    colorScheme: 'primary'
};