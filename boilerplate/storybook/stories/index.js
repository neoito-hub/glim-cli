"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const addon_actions_1 = require("@storybook/addon-actions");
const addon_knobs_1 = require("@storybook/addon-knobs");
const addon_links_1 = require("@storybook/addon-links");
const react_native_1 = require("@storybook/react-native");
const react_native_2 = require("react-native");
// eslint-disable-next-line import/extensions, import/no-unresolved
const Button_1 = __importDefault(require("./Button"));
const CenterView_1 = __importDefault(require("./CenterView"));
const Welcome_1 = __importDefault(require("./Welcome"));
(0, react_native_1.storiesOf)('Welcome', module).add('to Storybook', () => (<Welcome_1.default showApp={(0, addon_links_1.linkTo)('Button')}/>));
(0, react_native_1.storiesOf)('Button', module)
    .addDecorator(addon_knobs_1.withKnobs)
    .addDecorator(getStory => <CenterView_1.default>{getStory()}</CenterView_1.default>)
    .add('with text', () => (<Button_1.default onPress={(0, addon_actions_1.action)('clicked-text')}>
      <react_native_2.Text>{(0, addon_knobs_1.text)('title', 'Button Title')}</react_native_2.Text>
    </Button_1.default>))
    .add('with some emoji', () => (<Button_1.default onPress={(0, addon_actions_1.action)('clicked-emoji')}>
        <react_native_2.Text>😀 😎 👍 💯</react_native_2.Text>
      </Button_1.default>), { notes: 'A small component' });
