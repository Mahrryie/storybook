import ImageArrowLinksGridWithTextBlock from "../components/ImageArrowLinksGridWithTextBlock";
import List from '../components/List';
import TitleThid from '../components/TitleSecond';

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
            type: 'string',
            description: 'Sets overall wrapper CSS class',
            options: ['', 'background-light-gray'],
            control: {
                type: 'select'
            }
        },
        halvedItemClass: {
            type: 'String',
            description: 'Sets halved-item CSS class (not with image)',
        },
        content: {
            type: 'array',
            description: 'Optionally inserted content',
        },
        imageTitleLink: {
            type: 'boolean',
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

export const Default = Template.bind({});
Default.args = {

    colorScheme: 'primary',
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
    content: null,
};


export const MarkupCustom = Template.bind({});
MarkupCustom.args = {
    colorScheme: 'primary',
    backgroundClass: '',
    imageTitleLink: false,
    items: [{
        field_title: 'Application services',
        field_description: {
            value: 'Our software development company delivers corporate and consumer applications based on our profound understanding of technologies and the markets they operate in. With our professional mindset, we look beyond technology to offer viable solutions for your particular business context.'
        }
    }],
    content: (<>
        <TitleThid title='Why choose Itransition as your CRM consulting partner'/>
        <List items={[
            'Legacy systems',
            'ERP',
            'Supply chain management systems',
            'Ecommerce platforms',
            'Voice of the customer tools',
            'Accounting and billing systems',
            'Helpdesks']}/>
    </>),
};
