"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Ignore some yellowbox warnings. Some of these are for deprecated functions
 * that we haven't gotten around to replacing yet.
 */
const react_native_1 = require("react-native");
// prettier-ignore
react_native_1.LogBox.ignoreLogs([
    "Require cycle:",
]);
