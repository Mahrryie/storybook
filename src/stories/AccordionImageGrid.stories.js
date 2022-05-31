import AccordionImageGrid from '../components/AccordionImageGrid';
import Img from '../assets/healthcare-iot-related.jpg';

export default {
    title: 'Accordion/AccordionImageGrid',
    component: AccordionImageGrid,
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
    <AccordionImageGrid {...args}/>
);

export const Default = Template.bind({});
Default.args = { 
    items: [{
        title: "Architecture design",
        content: <p>We build application architectures from the ground up, including multi-tenant ones, paying special attention to their scalability and resilience.'</p>,
    },
    {
        title: "SaaS optimization",
        content: <p>Our team of expert technical consultants and business analysts will help you get the most value out of your existing cloud-based product.</p>,
        link: '/healthcare'
    },
    {
        title: "SaaS-based mobile development",
        content: <p> We deliver robust mobile solutions compatible with every platform to help you engage more customers and diversify your offering.</p>,
        link: '/healthcare'
    },
    {
        title: "Consulting",
        content: <p> We will put your software through rigorous testing to ensure its highest level of security and stable performance under regular and peak load </p>,
        link: '/healthcare'
    }],
    imageName: Img,
    sectionClass: '',
    colorScheme: 'primary'
};