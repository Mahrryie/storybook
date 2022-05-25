import LinkArrow from '../components/LinkArrow';

export default {
    title: 'LinkArrow',
    component: LinkArrow,
    argTypes: {
        link: {
            type: 'string',
            description: 'Link occurence',
            defaultValue: '/link',
            options: ['link', null],
            control: {
                type: 'radio'
            }
        },
        text: {
            type: 'string',
            description: 'Text occurence',
            defaultValue: 'Manufacturing is one of those industries which is as complex as it looks',
            options: ['', null],
        },
        colorScheme: {
            type: 'string',
            description: 'NOT A PROP! In prod environment sets background color according to a page color scheme. Used here for a visionary purpose',
            defaultValue: 'primary',
            options: ['primary', 'secondary', 'tertiary', 'quaternary'],
            control: {
                type: 'radio'
            }
        },
        textClass: {
            type: 'string',
            description: 'Sets CSS class to subtext',
            options: ['', 'medium-bold', 'medium-bold-700', 'anyClass-thinner'],
            control: {
              type: 'select'
            }
          },
    }

}

const Template = (args) => <LinkArrow {...args}/>;

export const Default = Template.bind({});
Default.args = {
    text: 'Manufacturing is one of those industries which is as complex as it looks. We develop EMR solutions that help cut down on paperwork and refine decision making thanks to interoperability with your clinical systems as data sources. Recognizing the need for unification and standardization, we are also open to developing universal electronic medical records systems.',
    link: '/link',
    linkClass: '',
    textClass: '',
    colorScheme: 'primary'
};
