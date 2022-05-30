import TableTopBorderedTitles from '../components/TableTopBorderedTitles';

export default {
    title: 'TableTopBorderedTitles',
    component: TableTopBorderedTitles,
    argTypes: {
        colorScheme: {
            type: 'string',
            description: 'NOT A PROP! In prod environment sets background color according to a page color scheme. Used here for a visionary purpose',
            defaultValue: 'primary',
            options: ['primary-scheme', 'secondary-scheme', 'tertiary-scheme', 'quaternary-scheme'],
            control: {
                type: 'radio'
            }
        },
        isCounter: {
            type: 'boolean'
        },
        titleClass: {
            type: 'string',
            description: 'Sets classes for left side headers, which do not contain link',
            defaultValue: '',
            options: ['', 'second-level-title', 'third-level-title', 'fourth-level-title'],
            control: {
                type: 'select'
            }
        },
        renderIcons: {
            type: 'function',
            description: 'Can be used to render icons or images'
        }
    }
}

const Template = (args) => <TableTopBorderedTitles {...args}/>;

export const Default = Template.bind({});
Default.args = {
    items: [{
        field_title: 'Amazon',
        field_description: {
            value: 'Itransition evaluates your current DevOps framework.',
        },
        field_list: ['Enable fast, efficient, and reliable software delivery', 'make release planning easily predictable.'],
        field_link: '/healthcare'
    },
    {
        field_title: 'Apprenda',
        field_description: {
            value: 'We adapt existing security solutions and set up new ones',
        },
        field_list: ['Reduce person-hours spent on routine tasks', 'rework in order to shift resources to higher-value activities'],
    },
    {
        field_title: 'Docker',
        field_list: ['Collect customer feedback', 'adapt to changes in an agile manner, and enhance user experience ongoingly.']
    }],
    tableClass: '',
    isCounter: false,
    isQuote: false,
    firstCellFree: true,
    titleGridClass: '',
    tableTopBorderedClass: '',
    titles: ['Platforms', 'Containerization'],
    titleClass: 'fifth-level-title',
    listItemParagraphClass: false,
    colorScheme: 'primary-scheme'
};
