import ListOfTitleLinkBlocks from '../components/ListOfTitleLinkBlocks';

export default {
    title: 'ListOfTitleLinkBlocks',
    component: ListOfTitleLinkBlocks,
    argTypes: {
        items: {
            type: 'array',
            description: "Object array which consists of field_title and field_description.value - requiredly, field_link - optionally"
        }
    }
}

const Template = (args) => <ListOfTitleLinkBlocks {...args}/>;

export const Default = Template.bind({});
Default.args = {
    items: [{
        field_title: 'Itransition’s team was in charge of selecting technologies',
        field_description: {
            value: 'The customer is a startup providing drone solutions to help their clients establish, maintain, and support automated operations. They aimed to disrupt the shipping industry with a drone product delivery ecosystem of services and apps integrated with retailer shopping carts.'
        },
    },
    {
        field_title: 'Itransition’s team was in charge of selecting technologies',
        field_description: {
            value: 'The customer is a startup providing drone solutions to help their clients establish, maintain, and support automated operations. They aimed to disrupt the shipping industry with a drone product delivery ecosystem of services and apps integrated with retailer shopping carts.'
        },
    },
    {
        field_title: 'Itransition’s team was in charge of selecting technologies',
        field_description: {
            value: 'The customer is a startup providing drone solutions to help their clients establish, maintain, and support automated operations. They aimed to disrupt the shipping industry with a drone product delivery ecosystem of services and apps integrated with retailer shopping carts.'
        },
    }],
};

export const withLink = Template.bind({});
withLink.args = {
    items: [{
        field_title: 'Itransition’s team was in charge of selecting technologies',
        field_description: {
            value: 'The customer is a startup providing drone solutions to help their clients establish, maintain, and support automated operations. They aimed to disrupt the shipping industry with a drone product delivery ecosystem of services and apps integrated with retailer shopping carts.'
        },
        field_link: '/'
    },
    {
        field_title: 'Itransition’s team was in charge of selecting technologies',
        field_description: {
            value: 'The customer is a startup providing drone solutions to help their clients establish, maintain, and support automated operations. They aimed to disrupt the shipping industry with a drone product delivery ecosystem of services and apps integrated with retailer shopping carts.'
        },
        field_link: '/'
    },
    {
        field_title: 'Itransition’s team was in charge of selecting technologies',
        field_description: {
            value: 'The customer is a startup providing drone solutions to help their clients establish, maintain, and support automated operations. They aimed to disrupt the shipping industry with a drone product delivery ecosystem of services and apps integrated with retailer shopping carts.'
        },
        field_link: '/'
    }],
};
