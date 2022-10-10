"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("react-native");
// Note: test renderer must be required after react-native.
const react_test_renderer_1 = __importDefault(require("react-test-renderer"));
const src_1 = require("../src");
describe('app', () => {
    it('renders correctly', () => {
        expect.assertions(1);
        const component = react_test_renderer_1.default.create(<src_1.App />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
