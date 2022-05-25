import {CalloutStripe, CalloutStripeSmall} from '../components/CalloutStripe';

export default {
    title: 'CalloutStripe',
    component: CalloutStripe,
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
        containerClass: {
          type: 'string',
          description: 'Sets callout classes',
          defaultValue: '',
          options: ['extra-height-cta', ''],
          control: {
            type: 'radio'
          }
        },
      }
}


const Template = (args) => (
    <CalloutStripe {...args}/>
);

const TemplateSmall = (args) => (
  <CalloutStripeSmall {...args}/>
);

export const Default = Template.bind({});
Default.args = { 
  colorScheme: 'primary',
  item: {
    field_description: {
      value: 'Make SAP Commerce your key enabler in the experience economy',
    },
    field_title: 'Contact us',
    field_secondary_description: 'with Itransition.',
  },
  containerClass: ''
};

export const Small = TemplateSmall.bind({});
Small.args = { 
  colorScheme: 'primary',
  item: {
    field_description: {
      value: 'Connect to your customers in a new way with Itransition’s CRM solutions',
    },
    field_title: 'Contact us',
    field_secondary_description: 'with Itransition.'
  },
  calloutClass: ''
};