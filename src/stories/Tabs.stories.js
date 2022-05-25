import TabsArea from '../components/Tabs';

export default {
    title: 'Tabs/TabsArea',
    component: TabsArea,
    argTypes: {
        colorScheme: {
            type: 'string',
            description: 'NOT A PROP! In prod environment sets background color according to a page color scheme. Used here for a visionary purpose',
            defaultValue: 'primary',
            options: ['primary', 'secondary', 'tertiary', 'quaternary'],
            control: {
                type: 'radio'
            }
        },
    }
}

const Template = (args) => <TabsArea {...args}/>;

export const Default = Template.bind({});
Default.args = {
    tabsItems: [{
        title: 'Continuous release & deployment',
        text: 'Being among established DevOps consulting firms, Itransition sets up software delivery in line with the DevOps methodologies from scratch, as well as helps companies enhance their existing processes, be it software design, deployment, or QA and testing.',
        link: '/healthcare',
    },
    {
        title: 'Continuous testing',
        text: 'Through DevOps consulting and automation, we help enterprises depart from traditional automated tests in favor of continuous testing integrated into software development processes.',
        link: '/healthcare'
    },
    {
        title: 'Continuous monitoring',
        text: 'When tasked with DevOps automation, we go far beyond code delivery and testing optimization.',
        link: '/healthcare'
    },
    {
        title: 'Continuous feedback & optimization',
        text: 'We help our customers leverage DevOps advantages to get a detailed picture of their software efficiency from the end-user perspective. ',
        link: '/healthcare'
    }],
    tabsClass: '',
    contentTextList: null,
    listOfLinkItems: null,
    listOfLinkTextItems: null,
    gridListClass: '',
    contentOptional: true,
    hasGridListItems: false,
    customItems: null,
    colorScheme: 'primary'
};

// export const ContentTextList = Template.bind({});
// ContentTextList.args = {
//     tabsItems: [{
//         title: 'Continuous release & deployment',
//         text: 'Being among established DevOps consulting firms, Itransition sets up software delivery in line with the DevOps methodologies from scratch, as well as helps companies enhance their existing processes, be it software design, deployment, or QA and testing.',
//         link: '/healthcare'
//     },
//     {
//         title: 'Continuous testing',
//         text: 'Through DevOps consulting and automation, we help enterprises depart from traditional automated tests in favor of continuous testing integrated into software development processes.',
//         link: '/healthcare'
//     },
//     {
//         title: 'Continuous monitoring',
//         text: 'When tasked with DevOps automation, we go far beyond code delivery and testing optimization.',
//         link: '/healthcare'
//     },
//     {
//         title: 'Continuous feedback & optimization',
//         text: 'We help our customers leverage DevOps advantages to get a detailed picture of their software efficiency from the end-user perspective. ',
//         link: '/healthcare'
//     }],
//     tabsClass: '',
//     contentTextList: [{
//         title: 'Collaboration & feedback',
//         text: 'Positioning ourselves among DevOps-as-a-Service providers, Itransition can align your infrastructure management approach with code delivery techniques to help you reduce human effort on manual configuration and provisioning of your software environments, along with making them uniform and consistent throughout the infrastructure. ',
//         listItems: ['Chef', 'Puppet', 'Ansible', 'SaltStack', 'Vagrant', 'BladeLogic', 'Terraform', 'CFEngine']
//     }],
//     listOfLinkItems: [],
//     listOfLinkTextItems: [],
//     gridListClass: '',
//     contentOptional: false,
//     hasGridListItems: false,
//     colorScheme: 'primary'
// };
