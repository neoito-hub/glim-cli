"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseConfig = {
    // This feature is particularly useful in development mode, but
    // can be used in production as well if you prefer.
    persistNavigation: "dev",
    /**
     * Only enable if we're catching errors in the right environment
     */
    catchErrors: "always",
    /**
     * This is a list of all the route names that will exit the app if the back button
     * is pressed while in that screen. Only affects Android.
     */
    exitRoutes: ["Welcome"],
};
exports.default = BaseConfig;
