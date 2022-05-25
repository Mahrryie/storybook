import ShareMenu from '../components/ShareMenu';

export default {
    title: 'Menu/ShareMenu',
    component: ShareMenu,
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

const Template = (args) => <ShareMenu {...args}/>;

export const ForNews = Template.bind({});
ForNews.args = {
    colorScheme: 'primary'
};
