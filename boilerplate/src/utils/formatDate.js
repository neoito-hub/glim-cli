"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDate = void 0;
const date_fns_1 = require("date-fns");
const i18n_js_1 = __importDefault(require("i18n-js"));
const ar_SA_1 = __importDefault(require("date-fns/locale/ar-SA"));
const ko_1 = __importDefault(require("date-fns/locale/ko"));
const en_US_1 = __importDefault(require("date-fns/locale/en-US"));
const getLocale = () => {
    const locale = i18n_js_1.default.currentLocale().split("-")[0];
    return locale === "ar" ? ar_SA_1.default : locale === "ko" ? ko_1.default : en_US_1.default;
};
const formatDate = (date, dateFormat, options) => {
    const locale = getLocale();
    const dateOptions = Object.assign(Object.assign({}, options), { locale });
    return (0, date_fns_1.format)((0, date_fns_1.parseISO)(date), dateFormat !== null && dateFormat !== void 0 ? dateFormat : "MMM dd, yyyy", dateOptions);
};
exports.formatDate = formatDate;
