import ImageContentGrid from "../components/ImageContentGrid";

export default {
    title: 'ImageContentGrid',
    component: ImageContentGrid,
    argTypes: {
        colorScheme: {
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

const Template = (args) => <ImageContentGrid {...args}/>;

export const Default = Template.bind({});
Default.args = {
    title: 'Customer',
    titleClass: '',
    content: <p>You're probably thinking, "What? Silly cats in costumes? That can't be. Cats are too sophisticated and snooty to participate in such shannigans." That's absolutely right. They are. But at least once a year, these felines' owners can't resist finding creative apparel to make sure their furry companions don't take themselves too seriously. And we get to laugh at them too.

        This may look like a cat wearing a Batman outfit. Actually, no. It's the small, awkward off-spring of Batman and Catwoman. Like the parents, the kid is also a misfit of society. Crime-fighting superhero? Not so much.
    </p>,
    contentLink: '',
    contentLinkOtherSide: '',
    backgroundClass: '',
    imageClass: '',
    withBorder: false,
    arrowLink: '',
    hasCallout: false,
    calloutOffsetBottom: false,
    isTitleLink: false,
    titleLink: '/',
    titleNumber: null,
    isInverted: false,
    colorScheme: 'primary'
};
