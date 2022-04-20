import TitleFourth from '../components/TitleFourth';

export default {
    title: 'Titles/Fourth',
    component: TitleFourth,
}

const Fourth = (args) => <TitleFourth {...args}/>;

export const Default = Fourth.bind({});
Default.args = {
    title: 'Why choose us',
    titleClass: 'fourth-level-title',
};
