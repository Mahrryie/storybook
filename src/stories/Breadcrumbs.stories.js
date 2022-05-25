import Breadcrumbs from '../components/Breadcrumbs';

export default {
    title: 'Breadcrumbs',
    component: Breadcrumbs,
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
          type: 'boolean',
          description: 'Add a dummy string, if parent page still in progress. Works in connection with nullTitle & nullLink',
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
    <Breadcrumbs {...args}/>
);

export const Default = Template.bind({});
Default.args = { 
  color: 'primary',
  links: [{title: 'Healthcare', path: {alias: '/healthcare'}}],
  pageName: 'StoryBook page',
  nullLinks: false,
  nullTitle: '',
  className: '',
  nullLink: '',
};