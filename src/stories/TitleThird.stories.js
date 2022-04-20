import TitleThird from '../components/TitleThird'

export default {
    title: 'Titles/Third',
    component: TitleThird,
}

const Third = (args) => <TitleThird {...args}/>

export const Default = Third.bind({});
Default.args = {
    title: 'Why choose us',
    titleClass: 'third-level-title'
};

export const withCounter = Third.bind({});
withCounter.args = {
  titleNumber: 1,
  title: 'Why choose us',
  titleClass: 'third-level-title'
};
