import TabsColumns from '../components/TabsColumns';

export default {
    title: 'Tabs/TabsColumns',
    component: TabsColumns,
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

const Template = (args) => <TabsColumns {...args}/>;

export const Default = Template.bind({});
Default.args = {
    tabsItems: [{
        title: 'Amazon',
        listItems: ['Itransition evaluates your current DevOps framework.',
            'Provide your development teams with greater creative freedom and technological capabilities with cloud-based DevOps',
            'Itransition evaluates your current DevOps framework and draws a detailed roadmap for implementing best practices in the cloud step by step.'
        ],
    },
    {
        title: 'Apprenda',
        listItems: ['Requirements analysis',
        'Technology selection & infrastructure setup',
        'Deployment automation'
    ],
    },
    {
        title: 'Docker',
        listItems: ['Configuration & change management',
        'AP & health monitoring',
        'Support & optimization',
        'Release management'
    ],
    }],
    colorScheme: 'primary'
};
