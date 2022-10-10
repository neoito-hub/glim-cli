"use strict";
/* eslint-disable react-native/no-raw-text, no-console */
// https://github.com/Intellicode/eslint-plugin-react-native/issues/271
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
exports.App = void 0;
const react_native_1 = require("react-native");
const NewAppScreen_1 = require("react-native/Libraries/NewAppScreen");
if (__DEV__) {
    Promise.resolve().then(() => __importStar(require('../ReactotronConfig'))).then(() => {
        console.log('Reactotron Configured');
    })
        .catch(() => console.error);
}
/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
const Section = ({ children, title }) => {
    const isDarkMode = (0, react_native_1.useColorScheme)() === 'dark';
    return (<react_native_1.View style={styles.sectionContainer}>
      <react_native_1.Text style={[
            styles.sectionTitle,
            { color: isDarkMode ? NewAppScreen_1.Colors.white : NewAppScreen_1.Colors.black }
        ]}>
        {title}
      </react_native_1.Text>

      <react_native_1.Text style={[
            styles.sectionDescription,
            { color: isDarkMode ? NewAppScreen_1.Colors.light : NewAppScreen_1.Colors.dark }
        ]}>
        {children}
      </react_native_1.Text>
    </react_native_1.View>);
};
const App = () => {
    const isDarkMode = (0, react_native_1.useColorScheme)() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? NewAppScreen_1.Colors.darker : NewAppScreen_1.Colors.lighter
    };
    return (<react_native_1.SafeAreaView style={backgroundStyle}>
      <react_native_1.StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} backgroundColor={backgroundStyle.backgroundColor}/>

      <react_native_1.ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
        <NewAppScreen_1.Header />

        <react_native_1.View style={{
            backgroundColor: isDarkMode ? NewAppScreen_1.Colors.black : NewAppScreen_1.Colors.white
        }}>
          <Section title="Step One">
            Edit <react_native_1.Text style={styles.highlight}>App.tsx</react_native_1.Text> to change this
            screen and then come back to see your edits.
          </Section>

          <Section title="See Your Changes">
            <NewAppScreen_1.ReloadInstructions />
          </Section>

          <Section title="Debug">
            <NewAppScreen_1.DebugInstructions />
          </Section>

          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>

          <NewAppScreen_1.LearnMoreLinks />
        </react_native_1.View>
      </react_native_1.ScrollView>
    </react_native_1.SafeAreaView>);
};
exports.App = App;
const styles = react_native_1.StyleSheet.create({
    highlight: {
        fontWeight: '700'
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24
    },
    sectionDescription: {
        fontSize: 18,
        fontWeight: '400',
        marginTop: 8
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600'
    }
});
// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, no-constant-condition
exports.default = exports.App; // Or StorybookUIRoot
// export default Reactotron.storybookSwitcher(storybook)(App)
// https://github.com/infinitered/reactotron/issues/1160
