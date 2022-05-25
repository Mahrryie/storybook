import Table from '../components/Table';

export default {
    title: 'Table',
    component: Table,
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
        isCounter: {
            type: 'boolean'
        }
    }
}

const Template = (args) => <Table {...args}/>;

export const Default = Template.bind({});
Default.args = {
    items: [{
        title: 'Better clinical decisions',
        listItems: [
            'Quick access to a 360-view of each patient',
            'Reduced medical errors',
            'Prevention of duplications or conflicts in prescriptions and treatment plans',
            'Faster emergency care in critical situations',
            'Symptomatic patterns identification for more accurate diagnoses',
            'Real-time patient health monitoring'
        ]
    },
    {
        title: 'Improved medical data management',
        listItems: [
            'Prevention of patient data tampering or loss',
            'Medical data access restriction for unauthorized users',
            'Correct patient data input without duplication',
            'Interoperability across all departments',
            'Secure data sharing',
        ]
    },
    {
        title: 'Enhanced communication with patients',
        listItems: [
            'Accurate, up-to-date, and complete information provision to patients',
            'Simplified appointment scheduling process',
            '24/7 access to health information and helpdesk from any device',
            'Availability of population engagement and education tools',
        ]
    }],
    tableClass: '',
    isCounter: false,
};
