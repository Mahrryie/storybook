import Paragraph from '../components/Paragraph';

export default {
    title: 'Paragraph',
    component: Paragraph,
}

const Par = (args) => <Paragraph {...args}/>;

export const Default = Par.bind({});
Default.args = {
    item: 'When examining your enterprise or consumer web app, we will focus on ensuring the proper functioning of backend and frontend components, their smooth performance, and airtight user data security.',
    paragraphClass: '',
};

export const MediumBold = Par.bind({});
MediumBold.args = {
    item: 'When examining your enterprise or consumer web app, we will focus on ensuring the proper functioning of backend and frontend components, their smooth performance, and airtight user data security.',
    paragraphClass: 'medium-bold',
};

export const ExtraTextMargin = Par.bind({});
ExtraTextMargin.args = {
    item: 'When examining your enterprise or consumer web app, we will focus on ensuring the proper functioning of backend and frontend components, their smooth performance, and airtight user data security.',
    paragraphClass: 'extra-text-margin'
}
