import ListOutstanding from '../components/ListOutstanding';

export default {
    title: 'ListOutstanding',
    component: ListOutstanding,
    argTypes: {
        items: {
            type: 'array',
            description: "Object array which consists of field_title and field_description.value"
        }
    }
}

const Template = (args) => <ListOutstanding {...args}/>;

export const Default = Template.bind({});
Default.args = {
    items: [{
        field_title: 'Itransition',
        field_description: {
            value: 'The customer is a startup providing drone solutions to help their clients establish, maintain, and support automated operations. They aimed to disrupt the shipping industry with a drone product delivery ecosystem of services and apps integrated with retailer shopping carts.'
        },
    },
    {
        field_title: 'Itransition',
        field_description: {
            value: 'The customer is a startup providing drone solutions to help their clients establish, maintain, and support automated operations. They aimed to disrupt the shipping industry with a drone product delivery ecosystem of services and apps integrated with retailer shopping carts.'
        },
    },
    {
        field_title: 'Itransition',
        field_description: {
            value: 'The customer is a startup providing drone solutions to help their clients establish, maintain, and support automated operations. They aimed to disrupt the shipping industry with a drone product delivery ecosystem of services and apps integrated with retailer shopping carts.'
        },
    }],
};