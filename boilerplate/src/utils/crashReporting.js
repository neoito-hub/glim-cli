"use strict";
/**
 * If you're using Sentry
 *   RN   https://docs.sentry.io/platforms/react-native/
 *   Expo https://docs.expo.dev/guides/using-sentry/
 */
// import * as Sentry from "sentry-expo"
// import * as Sentry from "@sentry/react-native"
Object.defineProperty(exports, "__esModule", { value: true });
exports.reportCrash = exports.ErrorType = exports.initCrashReporting = void 0;
/**
 * If you're using Crashlytics: https://rnfirebase.io/crashlytics/usage
 */
// import crashlytics from "@react-native-firebase/crashlytics"
/**
 * If you're using Bugsnag:
 *   RN   https://docs.bugsnag.com/platforms/react-native/)
 *   Expo https://docs.bugsnag.com/platforms/react-native/expo/
 */
// import Bugsnag from "@bugsnag/react-native"
// import Bugsnag from "@bugsnag/expo"
/**
 *  This is where you put your crash reporting service initialization code to call in `./app/app.tsx`
 */
const initCrashReporting = () => {
    // Sentry.init({
    //   dsn: "YOUR DSN HERE",
    //   enableInExpoDevelopment: true,
    //   debug: true, // If `true`, Sentry will try to print out useful debugging information if something goes wrong with sending the event. Set it to `false` in production
    // })
    // Bugsnag.start("YOUR API KEY")
};
exports.initCrashReporting = initCrashReporting;
/**
 * Error classifications used to sort errors on error reporting services.
 */
var ErrorType;
(function (ErrorType) {
    /**
     * An error that would normally cause a red screen in dev
     * and force the user to sign out and restart.
     */
    ErrorType["FATAL"] = "Fatal";
    /**
     * An error caught by try/catch where defined using Reactotron.tron.error.
     */
    ErrorType["HANDLED"] = "Handled";
})(ErrorType = exports.ErrorType || (exports.ErrorType = {}));
/**
 * Manually report a handled error.
 */
const reportCrash = (error, type = ErrorType.FATAL) => {
    if (__DEV__) {
        // Log to console and Reactotron in development
        const message = error.message || "Unknown";
        console.error(error);
        console.log(message, type);
        console.tron.log(error);
    }
    else {
        // In production, utilize crash reporting service of choice below:
        // RN
        // Sentry.captureException(error)
        // Expo
        // Sentry.Native.captureException(error)
        // crashlytics().recordError(error)
        // Bugsnag.notify(error)
    }
};
exports.reportCrash = reportCrash;
