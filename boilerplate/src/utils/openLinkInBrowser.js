"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.openLinkInBrowser = void 0;
const react_native_1 = require("react-native");
/**
 * Helper for opening a give URL in an external browser.
 */
function openLinkInBrowser(url) {
    react_native_1.Linking.canOpenURL(url).then((canOpen) => canOpen && react_native_1.Linking.openURL(url));
}
exports.openLinkInBrowser = openLinkInBrowser;
