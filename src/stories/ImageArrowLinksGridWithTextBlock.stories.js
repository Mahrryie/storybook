import ImageArrowLinksGridWithTextBlock from "../components/ImageArrowLinksGridWithTextBlock";

export default {
    title: 'ImageArrowLinksGridWithTextBlock',
    component: ImageArrowLinksGridWithTextBlock,
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
        imageHeaderClass: {
            type: 'string',
            description: 'Sets header CSS class'
        },
        imageClass: {
            type: 'String',
            description: 'Sets image CSS class'
        },
        textClass: {
            type: 'String',
            description: 'Sets header description CSS class',
            options: ['', 'medium-bold']
        },
        backgroundClass: {
            type: 'String',
            description: 'Sets overall wrapper CSS class',
        },
        halvedItemClass: {
            type: 'String',
            description: 'Sets halved-item CSS class (not with image)',
        },
        content: {
            type: 'String',
            description: 'Optionally inserted content',
        },
        imageTitleLink: {
            description: 'Link occurence in header'
        },
        imageTitleLinkClass: {
            type: 'String',
            description: 'Sets title link wrapper CSS class',
            options: ['second-level-title', 'third-level-title', 'fourth-level-title']
        },
    }

}

const Template = (args) => <ImageArrowLinksGridWithTextBlock {...args}/>;

export const CustomContentMarkup = Template.bind({});
CustomContentMarkup.args = {
    backgroundClass: '',
    imageTitleLink: false,
    items: [{
        field_title: 'Application services',
        field_description: {
            value: 'Our software development company delivers corporate and consumer applications based on our profound understanding of technologies and the markets they operate in. With our professional mindset, we look beyond technology to offer viable solutions for your particular business context.'
        }
    }],
    content: <p>Some custom content</p>,
    colorScheme: 'primary'
};

export const Predefined = Template.bind({});
Predefined.args = {
    backgroundClass: '',
    imageTitleLink: false,
    items: [{
        field_title: 'Application services',
        field_description: {
            value: 'Our software development company delivers corporate and consumer applications based on our profound understanding of technologies and the markets they operate in. With our professional mindset, we look beyond technology to offer viable solutions for your particular business context.'
        },
        field_link: '/'
    },
    {
    field_title: 'Intelligent automation',
    field_description: {
        value: 'We create digital transformation roadmaps and implement technologies that become growth drivers for our customers’ businesses.'
    },
    field_link: '/'},
    {
        field_title: 'Digital enterprise',
            field_description: {
                value: 'We put together software ecosystems that enable end-to-end process automation, data-driven decision making, and productive collaboration based on growth-ready technologies.'
            },
            field_link: '/'
    }],
    content: false,
    colorScheme: 'primary'
};
