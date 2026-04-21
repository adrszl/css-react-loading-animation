import { PlaceholderLoader } from "./PlaceholderLoader";
import './placeholderLoader.css';

export default {
    title: 'Simple paragraph skeleton/PlaceholderLoader',
    component: PlaceholderLoader,
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {
        header: { control: 'boolean' },
        subheader: { control: 'boolean' },
        intro: { control: 'boolean' },
        listItems: { control: { type: 'number', min: 0 } },
    },
    tags: ['autodocs'],
};

export const Primary = {
    args: {
        header: true,
        subheader: true,
        intro: true,
        listItems: 3
    },
};

export const Image = {
    args: {
    },
};