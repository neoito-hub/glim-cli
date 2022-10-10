"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// eslint-disable-next-line import/no-extraneous-dependencies
const prop_types_1 = __importDefault(require("prop-types"));
const react_1 = require("react");
const react_native_1 = require("react-native");
const styles = react_native_1.StyleSheet.create({
    content: {
        fontSize: 12,
        lineHeight: 18,
        marginBottom: 10
    },
    header: {
        fontSize: 18,
        marginBottom: 18
    },
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        padding: 24
    }
});
// eslint-disable-next-line react/require-optimization
class Welcome extends react_1.Component {
    constructor() {
        super(...arguments);
        // eslint-disable-next-line react/no-unused-class-component-methods
        this.showApp = (event) => {
            const { showApp } = this.props;
            event.preventDefault();
            // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions, @typescript-eslint/no-unnecessary-condition
            if (showApp) {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-call
                showApp();
            }
        };
    }
    render() {
        return (<react_native_1.View style={styles.wrapper}>
        <react_native_1.Text style={styles.header}>Welcome to React Native Storybook</react_native_1.Text>

        <react_native_1.Text style={styles.content}>
          This is a UI Component development environment for your React Native
          app. Here you can display and interact with your UI components as
          stories. A story is a single state of one or more UI components. You
          can have as many stories as you want. In other words a story is like a
          like a visual test case.
        </react_native_1.Text>

        <react_native_1.Text style={styles.content}>
          We have added some stories inside the `storybook/stories` directory
          for examples. Try editing the `storybook/stories/Welcome.js` file to
          edit this message.
        </react_native_1.Text>
      </react_native_1.View>);
    }
}
exports.default = Welcome;
Welcome.propTypes = { showApp: prop_types_1.default.func };
Welcome.defaultProps = { showApp: null };
