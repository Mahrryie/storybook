import {ImageGridBorderedCaption, ImageGridBorderedCaptionContent} from '../components/ImageGridBorderedCaption';
import Cat from '../assets/cat3.jpeg';

export default {
    title: 'ImageGridBorderedCaption',
    component: ImageGridBorderedCaption,
    argTypes: {
      numberOfChildren: {
        type: 'number',
        description: '!ALWAYS has to be in sync with NUMBER! Both are not props, used for visual presentation',
        defaultValue: 3,
      },
      number: {
        type: 'number',
        description: 'NOT a PROP! See numberOfChildren param.',
        defaultValue: 3
      },
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
          description: 'Set callout classes',
          defaultValue: '',
          options: ['extra-height-cta'],
          control: {
            type: 'select'
          }
        },
        halvedBorder: {
          description: 'Sets borderline half-width'
        },
        children: {
          table: {
            disable: true
          }
        },
        titleClass: {
          type: 'string',
          description: 'Sets title link wrapper CSS class',
          options: ['second-level-title', 'third-level-title', 'fourth-level-title', 'fifth-level-title'],
          control: {
            type: 'select'
          }
        },
        imageClass: {
          type: 'string',
          description: 'Sets CSS class to image'
        },
        subTextClass: {
          type: 'string',
          description: 'Sets CSS class to subtext',
          options: ['second-level-title', 'third-level-title', 'fourth-level-title', 'fifth-level-title', 'extra-bold'],
          control: {
            type: 'select'
          }
        },
      }
}


const Template = ({numberOfChildren, ...args}) => (
  <ImageGridBorderedCaption {...args}>
      {[...Array(numberOfChildren).keys()].map(n => (
          <ImageGridBorderedCaptionContent {...args}/>
      ))}
  </ImageGridBorderedCaption>
);

export const Default = Template.bind({});
Default.args = { 
  colorScheme: 'primary',
  items: [{
    field_description: {
      value: 'Itransition’s machine learning consultants provide strategic guidance throughout ML development projects. Starting with goal-setting and analysis of your business processes and data sources, we offer scenarios for business process optimization with machine learning algorithms, define the expected results, select technologies, and outline the development scope.',
    },
    field_title: 'Consulting',
    field_image: Cat
  }],
  containerClass: '',
  halvedBorder: false,
  imageClass: '',
  subTextClass: '',
  titleClass: '',
};

export const withLink = Template.bind({});
withLink.args = { 
  colorScheme: 'primary',
  items: [{
    field_description: {
      value: 'Itransition’s machine learning consultants provide strategic guidance throughout ML development projects. Starting with goal-setting and analysis of your business processes and data sources, we offer scenarios for business process optimization with machine learning algorithms, define the expected results, select technologies, and outline the development scope.',
    },
    field_title: 'Consulting',
    field_image: Cat,
    field_link: '/'
  }],
  containerClass: '',
  halvedBorder: false,
  containerClass: '',
  halvedBorder: false,
  imageClass: '',
  subTextClass: '',
  titleClass: '',
};

export const withSecondaryDescriptionAndList = Template.bind({});
withSecondaryDescriptionAndList.args = { 
  colorScheme: 'primary',
  items: [{
    field_description: {
      value: 'Itransition’s machine learning consultants provide strategic guidance throughout ML development projects. Starting with goal-setting and analysis of your business processes and data sources, we offer scenarios for business process optimization with machine learning algorithms, define the expected results, select technologies, and outline the development scope.',
    },
    field_title: 'Consulting',
    field_secondary_description: 'with Itransition.',
    field_list: ['soon'],
    field_image: Cat,
  }],
  containerClass: '',
  halvedBorder: false,
  containerClass: '',
  halvedBorder: false,
  imageClass: '',
  subTextClass: '',
  titleClass: '',
};

export const withoutSecondaryDescription = Template.bind({});
withoutSecondaryDescription.args = { 
  colorScheme: 'primary',
  items: [{
    field_description: {
      value: 'Itransition’s machine learning consultants provide strategic guidance throughout ML development projects. Starting with goal-setting and analysis of your business processes and data sources, we offer scenarios for business process optimization with machine learning algorithms, define the expected results, select technologies, and outline the development scope.',
    },
    field_title: 'Consulting',
    field_image: Cat,
    field_list: ['soon'],
  }],
  containerClass: '',
  halvedBorder: false,
  containerClass: '',
  halvedBorder: false,
  imageClass: '',
  subTextClass: '',
  titleClass: '',
};