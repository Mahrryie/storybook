import ContainerTwoColumnsBackground from '../components/ContainerTwoColumnsBackground';

export default {
    title: 'Containers/ContainerTwoColumnsBackground',
    component: ContainerTwoColumnsBackground,
    argTypes: {
        backgroundLightGray: {
            type: 'boolean',
            description: 'Sets background color to light-gray',
            defaultValue: true,
            options: [true, false],
        },
        invertBackground: {
            type: 'boolean',
            description: "Switches grids' background-color.",
            defaultValue: false,
            options: [true, false],
        },
        leftClass: {
            type: 'string',
            description: 'Custom css classes',
            defaultValue: '',
        },
        rightClass: {
            type: 'string',
            description: 'Custom css classes',
            defaultValue: '',
        },
        schemeColor: {
            type: 'string',
            description: "NOT a prop! Used for visual purposes to define color schemes' differences",
            defaultValue: 'primary-scheme',
            options: ['primary-scheme', 'secondary-scheme', 'tertiary-scheme', 'quaternary-scheme'],
            control: {
                type: 'radio'
            }
        }
      }
}

const Template = (args) => (
    <ContainerTwoColumnsBackground {...args}/>
);

export const Default = Template.bind({});
Default.args = {
    schemeColor: 'primary-scheme',
    gridClass: 'main-grid',
    invertBackground: false,
    leftClass: '',
    rightClass: '',
    backgroundLightGray: true,
    leftContent: <p>Our SharePoint development services aim at transforming the out-of-the-box platform into a custom solution in line with your corporate style, team structure, and collaboration patterns. We also perform SharePoint customization to extend the functionality of deployed solutions, optimize them, and make them easier to manage and use.</p>,
    rightContent: <p>At the pre-deployment stage, our business analysts will deliver a detailed project plan of your future SharePoint solution aligned with your requirements.

    With the solution roadmap on their hands, our technical team will help you design an appropriate SharePoint architecture with a suitable server topology to ensure the platform’s correct operation.
    
    Apart from handling on-premises SharePoint deployments, we also help companies set up their cloud and hybrid SharePoint environments.</p>,
};
