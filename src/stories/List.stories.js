import List from '../components/List';

export default {
    title: 'List',
    component: List,
    argTypes: {
        colorScheme: {
            type: 'String',
            description: 'NOT a prop! Used for visual purpose',
            control: {
                type: 'radio'
            },
            defaultValue: 'primary',
            options: ['primary', 'secondary', 'tertiary', 'quaternary']
        },
        listClass: {
            type: 'String',
            description: 'Sets styling to list',
            constrol: {
                type: 'select',
            },
            defaultValue: '',
            options: ['', 'columns-two', 'columns-three', 'columns-two-modified', 'list-top-padding', 'list-top-padding-mobile', 'list-line-height-extra', 'without-list-mark']
        }
    }
}

const Template = (args) => <List {...args}/>;

export const Default = Template.bind({});
Default.args = {
    items: ['Quick access to a 360-view of each patient',
        'Reduced medical errors',
        'Prevention of duplications or conflicts in prescriptions and treatment plans',
        'Faster emergency care in critical situations',
        'Symptomatic patterns identification for more accurate diagnoses',
        'Real-time patient health monitoring'
    ],
    listTitle: 'Better clinical decisions',
    listClass: '',
    colorScheme: 'primary'
};
