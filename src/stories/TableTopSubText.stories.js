import TableTopSubText from '../components/TableTopSubText';

export default {
    title: 'TableTopSubText',
    component: TableTopSubText,
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
    }
}

const Template = (args) => <TableTopSubText {...args}/>;

export const Default = Template.bind({});
Default.args = {
    items: [{
        field_title: 'Amazon',
        field_description: {
            value: 'Itransition evaluates your current DevOps framework.',
        },
    },
    {
        field_title: 'Apprenda',
        field_description: {
            value: 'We adapt existing security solutions and set up new ones to ensure permanent automated security monitoring of cloud software delivery pipelines.',
        },
    },
    {
        field_title: 'Docker',
        field_description: {
            value: 'Reduce person-hours spent on routine tasks and rework in order to shift resources to higher-value activities,',
        },
    }],
    colorScheme: 'primary'
};
