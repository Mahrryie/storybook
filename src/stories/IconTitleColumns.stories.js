import {IconTitleColumns, IconTitleColumnsContent} from '../components/IconTitleColumns';

const icon = <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3V29H29M7 17H11V25H7V17ZM15 6H19V25H15V6ZM23 12H27V25H23V12Z" stroke="#006A70" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
;

export default {
    title: 'IconTitleColumns',
    component: IconTitleColumns,
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
        numberOfChildren: {
            type: 'number',
            description: '!ALWAYS has to be in sync with NUMBER! Both are not props, used for visual presentation',
            defaultValue: 3,
        },
        iconTitleColumnsClass: {
            type: 'string',
            description: 'Custom CSS classes. Class .one-row works only with columns-4 || -5. extra-grid-row - works only with > 4 items',
            options: ['extra-grid-row', 'titles-only-type-1', 'one-row', 'columns-2-turn-into-4', 'one-row columns-2-turn-into-4', ''],
            control: {
                type: 'select'
            }
        },
        number: {
            type: 'number',
            description: 'NOT a PROP! See numberOfChildren param.',
            defaultValue: 3
        },
        items: {
            type: 'object',
            description: 'Used as a main prop instance for passing data.'
        },
        titleClass: {
            type: 'string',
            description: 'Sets title link wrapper CSS class',
            options: ['', 'second-level-title', 'third-level-title', 'fourth-level-title', 'fifth-level-title'],
            control: {
                type: 'select'
            }
        }
    }

}

const Template = ({numberOfChildren, ...args}) => (
    <IconTitleColumns {...args}>
        {[...Array(numberOfChildren).keys()].map(n => (
            <IconTitleColumnsContent {...args}/>
        ))}
    </IconTitleColumns>
);

export const Default = Template.bind({});
Default.args = {
    number: 3,
    numberOfChildren: 3,
    title: 'Financial transactions',
    icon: icon,
    text: 'Applying their expertise in smart contracts, Itransition’s team delivered blockchain app development on top of Hyperledger for end users to securely manage transactions regarding patent licensing and sales.',
    iconTitleColumnsClass: '',
    titleTextClass: '',
    titleClass: '',
    isMarkedList: false,
    number: 3,
    colorScheme: 'primary',
}

export const withList = Template.bind({});
withList.args = {
    number: 3,
    numberOfChildren: 3,
    title: 'Financial transactions',
    icon: icon,
    listItems: [
        'Macro- and micropayments',
        'Global transactions',
        'Multi-currency wallets',
        'Cryptocurrency fundraising'
    ],
    iconTitleColumnsClass: '',
    titleTextClass: '',
    titleClass: '',
    isMarkedList: true,
    colorScheme: 'primary',
};

export const withLink = Template.bind({});
withLink.args = {
    number: 3,
    numberOfChildren: 3,
    title: 'Financial transactions',
    icon: icon,
    listItems: [
        'Macro- and micropayments',
        'Global transactions',
        'Multi-currency wallets',
        'Cryptocurrency fundraising'
    ],
    link: '/finance',
    iconTitleColumnsClass: '',
    titleTextClass: '',
    titleClass: '',
    isMarkedList: true,
    colorScheme: 'primary',
};
