"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoImage = exports.useAutoImage = void 0;
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
/**
 * A hook that will return the scaled dimensions of an image based on the
 * provided dimesions' aspect ratio. If no desired dimensions are provided,
 * it will return the original dimensions of the remote image.
 *
 * How is this different from `resizeMode: 'contain'`? Firstly, you can
 * specify only one side's size (not both). Secondly, the image will scale to fit
 * the desired dimensions instead of just being contained within its image-container.
 *
 */
function useAutoImage(remoteUri, dimensions) {
    const [[remoteWidth, remoteHeight], setRemoteImageDimensions] = (0, react_1.useState)([
        0, 0
    ]);
    const remoteAspectRatio = remoteWidth / remoteHeight;
    const [maxWidth, maxHeight] = dimensions !== null && dimensions !== void 0 ? dimensions : [];
    (0, react_1.useLayoutEffect)(() => {
        if (!remoteUri)
            return;
        react_native_1.Image.getSize(remoteUri, (w, h) => setRemoteImageDimensions([w, h]));
    }, [remoteUri]);
    if (Number.isNaN(remoteAspectRatio))
        return [0, 0];
    if (maxWidth && maxHeight) {
        const aspectRatio = Math.min(maxWidth / remoteWidth, maxHeight / remoteHeight);
        return [remoteWidth * aspectRatio, remoteHeight * aspectRatio];
    }
    else if (maxWidth) {
        return [maxWidth, maxWidth / remoteAspectRatio];
    }
    else if (maxHeight) {
        return [maxHeight * remoteAspectRatio, maxHeight];
    }
    else {
        return [remoteWidth, remoteHeight];
    }
}
exports.useAutoImage = useAutoImage;
/**
 * An Image component that automatically sizes a remote or data-uri image.
 *
 * - [Documentation and Examples](https://github.com/infinitered/ignite/blob/master/docs/Components-AutoImage.md)
 */
function AutoImage(props) {
    var _a;
    const { maxWidth, maxHeight } = props, ImageProps = __rest(props, ["maxWidth", "maxHeight"]);
    const source = props.source;
    const [width, height] = useAutoImage(react_native_1.Platform.select({
        web: (_a = source === null || source === void 0 ? void 0 : source.uri) !== null && _a !== void 0 ? _a : source,
        default: source === null || source === void 0 ? void 0 : source.uri
    }), [maxWidth, maxHeight]);
    return <react_native_1.Image {...ImageProps} style={[{ width, height }, props.style]}/>;
}
exports.AutoImage = AutoImage;
