import RowLandingTabs from '../components/RowLandingTabs';
import CatRight from '../assets/cat4.jpg';
import CatLeft from '../assets/cat5.jpg';
import Paragraph from '../components/Paragraph';

export default {
    title: 'Tabs/RowLandingTabs',
    component: RowLandingTabs,
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
        tabsClass: {
            type: 'string',
            description: 'CSS class for tabs'
        },
        tabsItem: {
            type: 'array',
            description: 'Object array includes: title, text - required; text, link, listItems, leftOptionalContent, optionalContent - optional'
        }
    }
}

const Template = (args) => <RowLandingTabs {...args}/>;

export const AllPossibleConfigurations = Template.bind({});
AllPossibleConfigurations.args = {
    tabsItem: [{
        title: 'Tab title',
        tabNav: 'Default',
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
        title: 'Title with link',
        tabNav: 'With Link',
        link: '/'
    },
    {
        title: 'Title',
        tabNav: 'With list items',
        listItems: ['The standard Lorem Ipsum passage, used since the 1500s', 'Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC', '1914 translation by H. Rackham'],
    },
    {
        title: 'Title',
        tabNav: 'With left optional content',
        leftOptionalContent: <>
            <img src={CatLeft} style={{width: '70%'}}/>
            <Paragraph item='Some text Some textSome textSome textSome textSome textSome text'/>
        </>
    },
    {
        title: 'Title',
        tabNav: 'With right optional content',
        listItems: ['The standard Lorem Ipsum passage, used since the 1500s', 'Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC', '1914 translation by H. Rackham'],
        optionalContent: <>
            <img src={CatRight} style={{width: '20%'}}/>
            <Paragraph item='Some text Some textSome textSome textSome textSome textSome text'/>
        </>
    },
    {
        title: 'Title',
        tabNav: 'With all props',
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        link: '/',
        listItems: ['The standard Lorem Ipsum passage, used since the 1500s', 'Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC', '1914 translation by H. Rackham'],
        leftOptionalContent: <>
            <img src={CatLeft} style={{width: '70%'}}/>
        </>,
        optionalContent: <>
            <img src={CatRight} style={{width: '20%'}}/>
            <Paragraph item='Some text Some textSome textSome textSome textSome textSome text'/>
        </>
    },
    ],
    tabsClass: '',
    colorScheme: 'primary'
};
