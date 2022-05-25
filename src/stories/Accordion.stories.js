import Accordion from '../components/accordion/Acordion';

export default {
    title: 'Accordion/Accordion',
    component: Accordion,
    argTypes: {
        color: {
          type: 'string',
          description: 'NOT A PROP! In prod environment sets color according to a page color scheme. Used here for a visionary purpose',
          defaultValue: 'primary',
          options: ['primary', 'secondary', 'tertiary', 'quaternary'],
          control: {
            type: 'radio'
          }
        },
        nullLinks: {
          description: 'Add a dummy string, if parent page still in progress',
          defaultValue: 'null',
          options: ['Add a dummy', 'null'],
          control: {
            type: 'radio'
          }
        },
        nullTitle: {
          description: 'Dummy page name. See nullLinks prop',
        },
        nullLink: {
          description: 'Dummy link. See nullLinks prop',
        }
      }
}

const Template = (args) => (
    <Accordion {...args}/>
);

export const Default = Template.bind({});
Default.args = { 
    items: [{
        title: "Test title",
        content: 'Test',
        link: '/healthcare'
    },
    {
        title: "Test title",
        content: 'Test',
        link: '/healthcare'
    },
    {
        title: "Test title",
        content: 'Test',
        link: '/healthcare'
    },
    {
        title: "Test title",
        content: 'Test',
        link: '/healthcare'
    }],
    featuredAccordion: false,
    titleLinkOffset: false,
    accordionOffsetName: '',
    extraHeight: false,
};