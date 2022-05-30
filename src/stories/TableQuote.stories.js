import TableQuote from '../components/TableQuote';

export default {
    title: 'TableQuote',
    component: TableQuote,
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
        listClass: {
            type: 'String',
            description: 'Sets styling to list',
            constrol: {
                type: 'select',
            },
            defaultValue: '',
            options: ['', 'columns-two', 'columns-three', 'columns-two-modified', 'list-top-padding', 'list-top-padding-mobile', 'list-line-height-extra', 'without-list-mark']
        },
        tableClass: {
            type: 'string',
            description: 'Sets CSS class to table',
            default: '',
        },
        titleGridClass: {
            type: 'string',
            defaultValue: '',
            description: 'Sets CSS class to left table side',
            options: ['' , 'main-grid-less-quarter'],
            control: {
                type: 'select'
            }
        },
    } 
}

const Template = (args) => <TableQuote {...args}/>;

export const Default = Template.bind({});
Default.args = {
    items: [{
        field_title: 'Ryan Scott',
        field_list: ['Some list', 'one more'],
        field_description: {
            value: 'Itransition has become our trusted technology partner. Their contributions have become essential to our overall programme success.',
        },
        field_link: '/healthcare',
        field_secondary_description: 'Some secondary description'
    },
    {
        field_title: 'Sam Wilson',
        field_list: ['Some list', 'one more'],
        field_description: {
            value: 'Itransition is a truly global provider of software engineering and consulting services. ',
        },
        field_secondary_description: 'Some secondary description'
    }],
    tableClass: '',
    textGridClass: '',
    titleGridClass: '',
    listClass: '',
    withoutListMarker: true,
};
