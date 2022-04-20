import ContainerBackground from '../components/ContainerBackground';

export default {
    title: 'Containers/Background',
    component: ContainerBackground,
    argTypes: {
        backgroundColor: {
          type: 'string',
          description: 'NOT A PROP! In prod environment sets background color according to a page color scheme. Used here for a visionary purpose',
          defaultValue: 'primary',
          options: ['primary', 'secondary', 'tertiary', 'quaternary'],
          control: {
            type: 'radio'
          }
        }
      }
}

const Background = (args) => (
    <ContainerBackground {...args}>
    <p>Our software development company delivers corporate and consumer
        applications based on our profound understanding of technologies and the
        markets they operate in. With our professional mindset,
        we look beyond technology to offer viable solutions
        for your particular business context.
    </p>
    </ContainerBackground>
);

export const Colored = Background.bind({});
Colored.args = { 
  backgroundColor: 'primary'
};

export const BackgroundLightGray = Background.bind({});
BackgroundLightGray.args = {
  containerClass: 'background-light-gray',
  backgroundColor: 'n'
};