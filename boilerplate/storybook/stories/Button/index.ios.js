"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const Button = ({ onPress = () => {
    // do nothing.
}, children = null }) => {
    return (<react_native_1.TouchableHighlight accessibilityRole="button" onPress={onPress}>
      {children}
    </react_native_1.TouchableHighlight>);
};
exports.default = Button;
