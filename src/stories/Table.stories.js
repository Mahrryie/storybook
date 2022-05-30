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
        },
        tableClass: {
            type: 'string',
            description: 'Sets CSS class to table',
            default: '',
            options: ['', 'table-top-bordered', 'table-top-bordered-row', 'table-top-bordered table-top-bordered-row', 'table-top-bordered-columns-four'],
            control: {
                type: 'select'
            }
        }
    }
}

const Template = (args) => <Table {...args}/>;

export const Default = Template.bind({});
Default.args = {
    items: [{
        title: 'Better clinical decisions',
        listItems: [
            'Quick access',
            'Reduced medical errors',
            'Prevention of duplications',
            'Faster emergency care',
            'Symptomatic patterns',
            'Real-time health monitoring',
            'Reduced medical errors',
            'Prevention of duplications',
            'Faster emergency',
            'Symptomatic patterns',
            'Real-time monotoring'
        ]
    },
    {
        title: 'Improved medical data management',
        listItems: [
            'Prevention of patient data tampering or loss',
            'Correct patient data input without duplication',
            'Interoperability across all departments',
            'Secure data sharing',
        ]
    },
    {
        title: 'Enhanced communication with patients',
        listItems: [
            'Complete information provision to patients',
            'Simplified appointment scheduling process',
            '24/7 access to health information',
            'Availability of population engagement and education tools',
        ]
    }],
    tableClass: '',
    isCounter: false,
    colorScheme: 'primary'
};
