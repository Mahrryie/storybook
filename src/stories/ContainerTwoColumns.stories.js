import ContainerTwoColumns from '../components/ContainerTwoColumns';

export default {
    title: 'Containers/ContainerTwoColumns',
    component: ContainerTwoColumns,
    argTypes: {
        leftContent: {
            type: 'string',
            description: "Left content occurence",
            defaultValue: 'Future SharePoint solution aligned with your requirements.',
            options: ['', null],
        }
      }
}

const Template = (args) => (
    <ContainerTwoColumns {...args}/>
);

export const Default = Template.bind({});
Default.args = { 
    containerClass: '',
    rightContent: <p>Our SharePoint development services aim at transforming the out-of-the-box platform into a custom solution in line with your corporate style, team structure, and collaboration patterns. We also perform SharePoint customization to extend the functionality of deployed solutions, optimize them, and make them easier to manage and use.</p>,
    leftContent: <p>At the pre-deployment stage, our business analysts will deliver a detailed project plan of your future SharePoint solution aligned with your requirements.

    With the solution roadmap on their hands, our technical team will help you design an appropriate SharePoint architecture with a suitable server topology to ensure the platform’s correct operation.
    
    Apart from handling on-premises SharePoint deployments, we also help companies set up their cloud and hybrid SharePoint environments.</p>,
    leftContainerClass: ''
};
