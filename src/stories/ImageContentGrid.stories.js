import ImageContentGrid from "../components/ImageContentGrid";
import List from '../components/List';
import LinkArrow from '../components/LinkArrow';

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
        },
        titleClass: {
            type: 'String',
            description: 'Sets title link wrapper CSS class',
            options: ['', 'second-level-title', 'third-level-title', 'fourth-level-title']
        },
        backgroundClass: {
            type: 'string',
            description: 'Sets background color',
            options: ['', 'background-theme', 'background-light-gray', 'background-theme-second'],
            control: {
                type: 'select'
            }
        }
    }

}

const Template = (args) => <ImageContentGrid {...args}/>;

export const Default = Template.bind({});
Default.args = {
    colorScheme: 'primary',
    title: 'Customer',
    titleClass: '',
    content: <p>You're probably thinking, "What? Silly cats in costumes? That can't be. Cats are too sophisticated and snooty to participate in such shannigans." That's absolutely right. They are. But at least once a year, these felines' owners can't resist finding creative apparel to make sure their furry companions don't take themselves too seriously. And we get to laugh at them too.

        This may look like a cat wearing a Batman outfit. Actually, no. It's the small, awkward off-spring of Batman and Catwoman. Like the parents, the kid is also a misfit of society. Crime-fighting superhero? Not so much.
    </p>,
    contentLinkOtherSide: null,
    backgroundClass: '',
    imageClass: '',
    withBorder: false,
    arrowLink: null,
    hasCallout: false,
    calloutOffsetBottom: false,
    isTitleLink: false,
    titleLink: null,
    titleNumber: null,
    isInverted: false,
    contentLink: null,
};

export const WithLink = Template.bind({});
WithLink.args = {
    colorScheme: 'primary',
    title: 'Component with Link',
    titleClass: 'second-level-title',
    content: <>
        <p>You're probably thinking, "What? Silly cats in costumes? That can't be. Cats are too sophisticated and snooty to participate in such shannigans." That's absolutely right. They are. But at least once a year, these felines' owners can't resist finding creative apparel to make sure their furry companions don't take themselves too seriously. And we get to laugh at them too.

            This may look like a cat wearing a Batman outfit. Actually, no. It's the small, awkward off-spring of Batman and Catwoman. Like the parents, the kid is also a misfit of society. Crime-fighting superhero? Not so much.
        </p>

        <List items={[
            'Quality management and information security compliance',
            'Cybersecurity assured throughout SDLC',
            'Technical health management and coordination',]}
            listClass='list-top-padding'
        />
    </>,
    contentLinkOtherSide: '',
    backgroundClass: '',
    imageClass: '',
    withBorder: false,
    arrowLink: '',
    hasCallout: false,
    calloutOffsetBottom: false,
    isTitleLink: true,
    titleLink: '/link',
    titleNumber: null,
    isInverted: false,
    contentLink: null,
    arrowLink: <LinkArrow link='link'/>
};

