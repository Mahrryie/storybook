import TitleSecond from '../components/TitleSecond';

export default {
    title: 'Titles/Second',
    component: TitleSecond,
}

const Second = (args) => <TitleSecond {...args}/>;

export const Default = Second.bind({});
Default.args = {
    title: 'Why choose us',
    titleClass: 'second-level-title',
};

export const withCounter = Second.bind({});
withCounter.args = {
  titleNumber: 1,
  titleClass: 'second-level-title',
  title: 'Why choose us',
};
