import LandingQuote from "../components/LandingQuote";

export default {
    title: 'LandingQuote',
    component: LandingQuote,
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

const Template = (args) => <LandingQuote {...args}/>;

export const Default = Template.bind({});
Default.args = {
    title: 'Manufacturing is one of those industries which is as complex as it looks.',
    quote: {
        field_description: {
            value: 'A web-based investment portfolio management platform, TradeStops, serves 30,000+ North-American investors and features advanced risk management, intelligent alerts, and stock analytics.'
        },
        field_title: 'Dr. Heiss',
        field_position: 'PhD, CEO, Head of Finance'
    },
    colorScheme: 'primary'
};
