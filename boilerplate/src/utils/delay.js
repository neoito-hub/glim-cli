"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.delay = void 0;
/**
 * A "modern" sleep statement.
 *
 * @param ms The number of milliseconds to wait.
 */
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
exports.delay = delay;
