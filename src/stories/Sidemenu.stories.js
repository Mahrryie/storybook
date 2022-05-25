import Sidemenu from '../components/SideMenu';

export default {
    title: 'Menu/Sidemenu',
    component: Sidemenu,
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

const Template = (args) => <Sidemenu {...args}/>;

export const SideMenuForBlogsPortfolioNews = Template.bind({});
SideMenuForBlogsPortfolioNews.args = {
    colorScheme: 'primary',
    items: [{
        title: 'What is a smart supply chain?',
        link: '/'
    },
    {
        title: 'Conventional vs smart supply chains',
        link: '/'
    },
    {
        title: 'A holistic transformation approach',
        link: '/'
    },
    {
        title: 'Conclusion',
        link: '/'
    },
    ],
    colorScheme: 'primary',
    share: true
};
