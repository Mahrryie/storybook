import Button from '../components/Button';

export default {
    title: 'Button',
    component: Button,
    argTypes: {
        colorScheme: {
          type: 'string',
          description: 'NOT A PROP! In prod environment sets color according to a page color scheme. Used here for a visionary purpose',
          defaultValue: 'primary',
          options: ['primary', 'secondary', 'tertiary', 'quaternary'],
          control: {
            type: 'radio'
          }
        },
      }
}

const Template = (args) => (
    <Button {...args}/>
);

export const Default = Template.bind({});
Default.args = { 
  colorScheme: 'primary',
  text: 'Hi, this is a button'
};