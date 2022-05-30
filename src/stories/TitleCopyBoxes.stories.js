import TitleCopyBoxes from '../components/TitleCopyBoxes';
import TitleCopyImg from '../assets/crm-consulting-mobile.webp';

export default {
    title: 'TitleCopyBoxes',
    component: TitleCopyBoxes,
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

const Template = (args) => <TitleCopyBoxes {...args}/>;

export const ThreeItems = Template.bind({});
ThreeItems.args = {
    items: [{
        field_title: 'CRM implementation',
        field_description: {
            value: 'Itransition carries out all stages of CRM implementation, from consulting and strategy outline to system onboarding and user training.'
        },
        field_link: '/crm',
        relationships: {
            field_image: TitleCopyImg
        }
    },
    {
        field_title: 'CRM implementation',
        field_description: {
            value: 'Itransition carries out all stages of CRM implementation, from consulting and strategy outline to system onboarding and user training.'
        },
        field_link: '/crm',
    },
    {
        field_title: 'CRM implementation',
        field_description: {
            value: 'Itransition carries out all stages of CRM implementation, from consulting and strategy outline to system onboarding and user training.'
        },
        field_link: '/crm',
    }],
    backgroundClass: '',
    imageClass: '',
    colorScheme: 'primary'
};

export const FourItems = Template.bind({});
FourItems.args = {
    items: [{
        field_title: 'CRM implementation',
        field_description: {
            value: 'Itransition carries out all stages of CRM implementation, from consulting and strategy outline to system onboarding and user training.'
        },
        field_link: '/crm',
        relationships: {
            field_image: TitleCopyImg
        }
    },
    {
        field_title: 'CRM implementation',
        field_description: {
            value: 'Itransition carries out all stages of CRM implementation, from consulting and strategy outline to system onboarding and user training.'
        },
        field_link: '/crm',
    },
    {
        field_title: 'CRM implementation',
        field_description: {
            value: 'Itransition carries out all stages of CRM implementation, from consulting and strategy outline to system onboarding and user training.'
        },
        field_link: '/crm',
    },
    {
        field_title: 'CRM implementation',
        field_description: {
            value: 'Itransition carries out all stages of CRM implementation, from consulting and strategy outline to system onboarding and user training.'
        },
        field_link: '/crm',
        relationships: {
            field_image: TitleCopyImg
        }
    }],
    backgroundClass: '',
    imageClass: '',
    colorScheme: 'primary'
};

export const FifthItems = Template.bind({});
FifthItems.args = {
    items: [{
        field_title: 'CRM implementation',
        field_description: {
            value: 'Itransition carries out all stages of CRM implementation, from consulting and strategy outline to system onboarding and user training.'
        },
        field_link: '/crm',
        relationships: {
            field_image: TitleCopyImg
        }
    },
    {
        field_title: 'CRM implementation',
        field_description: {
            value: 'Itransition carries out all stages of CRM implementation, from consulting and strategy outline to system onboarding and user training.'
        },
        field_link: '/crm',
    },
    {
        field_title: 'CRM implementation',
        field_description: {
            value: 'Itransition carries out all stages of CRM implementation, from consulting and strategy outline to system onboarding and user training.'
        },
        field_link: '/crm',
    },
    {
        field_title: 'CRM implementation',
        field_description: {
            value: 'Itransition carries out all stages of CRM implementation, from consulting and strategy outline to system onboarding and user training.'
        },
        field_link: '/crm',
        relationships: {
            field_image: TitleCopyImg
        }
    },
    {
        field_title: 'CRM implementation',
        field_description: {
            value: 'Itransition carries out all stages of CRM implementation, from consulting and strategy outline to system onboarding and user training.'
        },
        field_link: '/crm',
    },],
    backgroundClass: '',
    imageClass: '',
    colorScheme: 'primary'
};

export const SixItems = Template.bind({});
SixItems.args = {
    items: [{
        field_title: 'CRM implementation',
        field_description: {
            value: 'Itransition carries out all stages of CRM implementation, from consulting and strategy outline to system onboarding and user training.'
        },
        field_link: '/crm',
        relationships: {
            field_image: TitleCopyImg
        }
    },
    {
        field_title: 'CRM implementation',
        field_description: {
            value: 'Itransition carries out all stages of CRM implementation, from consulting and strategy outline to system onboarding and user training.'
        },
        field_link: '/crm',
    },
    {
        field_title: 'CRM implementation',
        field_description: {
            value: 'Itransition carries out all stages of CRM implementation, from consulting and strategy outline to system onboarding and user training.'
        },
        field_link: '/crm',
    },
    {
        field_title: 'CRM implementation',
        field_description: {
            value: 'Itransition carries out all stages of CRM implementation, from consulting and strategy outline to system onboarding and user training.'
        },
        field_link: '/crm',
    },
    {
        field_title: 'CRM implementation',
        field_description: {
            value: 'Itransition carries out all stages of CRM implementation, from consulting and strategy outline to system onboarding and user training.'
        },
        field_link: '/crm',
    },
    {
        field_title: 'CRM implementation',
        field_description: {
            value: 'Itransition carries out all stages of CRM implementation, from consulting and strategy outline to system onboarding and user training.'
        },
        field_link: '/crm',
        relationships: {
            field_image: TitleCopyImg
        }
    },],
    middleRowEven: true,
    backgroundClass: '',
    imageClass: '',
    colorScheme: 'primary'
};