import ContactUs from '../components/ContactForm/ContactUs';

export default {
    title: 'ContactUs',
    component: ContactUs,
    argTypes: {
        colorScheme: {
            type: 'string',
            description: 'NOT A PROP! In prod environment sets color according to a page color scheme. Used here for a visionary purpose',
            defaultValue: 'primary_`',
            options: ['primary_1', 'secondary_1', 'tertiary_1', 'quaternary_1'],
            control: {
                type: 'radio'
            }
        },
      }
}

const Background = (args) => (<ContactUs {...args}/>);

export const Default = Background.bind({});
Default.args = {
    colorScheme: 'primary_1',
};