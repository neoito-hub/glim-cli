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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Screen = void 0;
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const expo_status_bar_1 = require("expo-status-bar");
const react_native_safe_area_context_1 = require("react-native-safe-area-context");
const native_1 = require("@react-navigation/native");
const isIos = react_native_1.Platform.OS === 'ios';
function isNonScrolling(preset) {
    return !preset || preset === 'fixed';
}
function useAutoPreset(props) {
    const { preset, scrollEnabledToggleThreshold } = props;
    const { percent = 0.92, point = 0 } = scrollEnabledToggleThreshold || {};
    const scrollViewHeight = (0, react_1.useRef)(null);
    const scrollViewContentHeight = (0, react_1.useRef)(null);
    const [scrollEnabled, setScrollEnabled] = (0, react_1.useState)(true);
    function updateScrollState() {
        if (scrollViewHeight.current === null ||
            scrollViewContentHeight.current === null)
            return;
        // check whether content fits the screen then toggle scroll state according to it
        const contentFitsScreen = (function () {
            if (point) {
                return (scrollViewContentHeight.current < scrollViewHeight.current - point);
            }
            else {
                return (scrollViewContentHeight.current < scrollViewHeight.current * percent);
            }
        })();
        // content is less than the size of the screen, so we can disable scrolling
        if (scrollEnabled && contentFitsScreen)
            setScrollEnabled(false);
        // content is greater than the size of the screen, so let's enable scrolling
        if (!scrollEnabled && !contentFitsScreen)
            setScrollEnabled(true);
    }
    function onContentSizeChange(w, h) {
        // update scroll-view content height
        scrollViewContentHeight.current = h;
        updateScrollState();
    }
    function onLayout(e) {
        const { height } = e.nativeEvent.layout;
        // update scroll-view  height
        scrollViewHeight.current = height;
        updateScrollState();
    }
    // update scroll state on every render
    if (preset === 'auto')
        updateScrollState();
    return {
        scrollEnabled: preset === 'auto' ? scrollEnabled : true,
        onContentSizeChange,
        onLayout
    };
}
function useSafeAreaInsetPadding(safeAreaEdges) {
    const insets = (0, react_native_safe_area_context_1.useSafeAreaInsets)();
    const insetStyles = {};
    safeAreaEdges === null || safeAreaEdges === void 0 ? void 0 : safeAreaEdges.forEach((edge) => {
        const paddingProp = `padding${edge.charAt(0).toUpperCase()}${edge.slice(1)}`;
        insetStyles[paddingProp] = insets[edge];
    });
    return insetStyles;
}
function ScreenWithoutScrolling(props) {
    const { style, contentContainerStyle, children } = props;
    return (<react_native_1.View style={[$outerStyle, style]}>
      <react_native_1.View style={[$innerStyle, contentContainerStyle]}>{children}</react_native_1.View>
    </react_native_1.View>);
}
function ScreenWithScrolling(props) {
    const { children, keyboardShouldPersistTaps = 'handled', contentContainerStyle, ScrollViewProps, style } = props;
    const ref = (0, react_1.useRef)();
    const { scrollEnabled, onContentSizeChange, onLayout } = useAutoPreset(props);
    // Add native behavior of pressing the active tab to scroll to the top of the content
    // More info at: https://reactnavigation.org/docs/use-scroll-to-top/
    (0, native_1.useScrollToTop)(ref);
    return (<react_native_1.ScrollView {...{ keyboardShouldPersistTaps, scrollEnabled, ref }} {...ScrollViewProps} onLayout={e => {
            var _a;
            onLayout(e);
            (_a = ScrollViewProps === null || ScrollViewProps === void 0 ? void 0 : ScrollViewProps.onLayout) === null || _a === void 0 ? void 0 : _a.call(ScrollViewProps, e);
        }} onContentSizeChange={(w, h) => {
            var _a;
            onContentSizeChange(w, h);
            (_a = ScrollViewProps === null || ScrollViewProps === void 0 ? void 0 : ScrollViewProps.onContentSizeChange) === null || _a === void 0 ? void 0 : _a.call(ScrollViewProps, w, h);
        }} style={[$outerStyle, ScrollViewProps === null || ScrollViewProps === void 0 ? void 0 : ScrollViewProps.style, style]} contentContainerStyle={[
            $innerStyle,
            ScrollViewProps === null || ScrollViewProps === void 0 ? void 0 : ScrollViewProps.contentContainerStyle,
            contentContainerStyle
        ]}>
      {children}
    </react_native_1.ScrollView>);
}
function Screen(props) {
    const { backgroundColor = 'white', KeyboardAvoidingViewProps, keyboardOffset = 0, safeAreaEdges, StatusBarProps, statusBarStyle = 'dark' } = props;
    const insetPadding = useSafeAreaInsetPadding(safeAreaEdges);
    return (<react_native_1.View style={[$containerStyle, { backgroundColor }, insetPadding]}>
      <expo_status_bar_1.StatusBar style={statusBarStyle} {...StatusBarProps}/>

      <react_native_1.KeyboardAvoidingView behavior={isIos ? 'padding' : undefined} keyboardVerticalOffset={keyboardOffset} {...KeyboardAvoidingViewProps} style={[$keyboardAvoidingViewStyle, KeyboardAvoidingViewProps === null || KeyboardAvoidingViewProps === void 0 ? void 0 : KeyboardAvoidingViewProps.style]}>
        {isNonScrolling(props.preset) ? (<ScreenWithoutScrolling {...props}/>) : (<ScreenWithScrolling {...props}/>)}
      </react_native_1.KeyboardAvoidingView>
    </react_native_1.View>);
}
exports.Screen = Screen;
const $containerStyle = {
    flex: 1,
    height: '100%',
    width: '100%'
};
const $keyboardAvoidingViewStyle = {
    flex: 1
};
const $outerStyle = {
    flex: 1,
    height: '100%',
    width: '100%'
};
const $innerStyle = {
    justifyContent: 'flex-start',
    alignItems: 'stretch'
};
