import TableTopBordered from '../components/TableTopBordered';

export default {
    title: 'TableTopBordered',
    component: TableTopBordered,
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

const Template = (args) => <TableTopBordered {...args}/>;

export const Default = Template.bind({});
Default.args = {
    titles: ['Platforms', 'Description'],
    items: [{
        field_title: 'SAP Commerce',
        field_description: {
            value: 'A cloud solution for medium and large-scale businesses, equipped with rich built-in features and powered by AI. ',
        },
        field_link: '/healthcare',
    },
    {
        field_title: 'Salesforce',
        field_link: '/healthcare',
        field_description: {
            value: 'An AI-powered cloud solution for medium and large-scale enterprises, designed for omnichannel commerce',
        }
    },
    {
        field_title: 'Magento',
        field_link: '/healthcare',
        field_description: {
            value: 'A flexible ecommerce platform for medium and large-scale brands, offering multiple extensions and room for scaling. ',
        }
    },
    {
        field_title: 'WooCommerce',
        field_description: {
            value: 'An open-source ecommerce platform built for WordPress, which allows SMEs to create online stores and tailor them to their specific requirements.',
        }
    },
    {
        field_title: 'Drupal Commerce',
        field_description: {
            value: 'A highly customizable ecommerce software, suitable for startups and SMEs, with all its features available for free.',
        }
    }],
    tableClass: '',
    titleGridClass: '',
    listClass: '',
    withoutListMarker: true,
    colorScheme: 'primary'
};
