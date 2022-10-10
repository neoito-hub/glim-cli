"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// eslint-disable-next-line import/no-extraneous-dependencies
const prop_types_1 = __importDefault(require("prop-types"));
const react_native_1 = require("react-native");
const style_1 = __importDefault(require("./style"));
const CenterView = ({ children }) => {
    return <react_native_1.View style={style_1.default.main}>{children}</react_native_1.View>;
};
CenterView.defaultProps = {
    children: null
};
CenterView.propTypes = {
    // @ts-expect-error Type 'Requireable<ReactNodeLike>' is not assignable to type 'Validator<ReactNode>'
    children: prop_types_1.default.node
};
exports.default = CenterView;
