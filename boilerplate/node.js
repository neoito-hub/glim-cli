"use strict";
/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@curveball/core");
const router_1 = __importDefault(require("@curveball/router"));
const app = new core_1.Application();
console.log('http://localhost:1337 or http://127.0.0.1:1337');
console.log('Check: $ netstat -an');
app.use((0, router_1.default)('/', (ctx) => {
    ctx.status = 200;
    ctx.response.body = ['l', 'e', 'e', 't'];
}), (0, router_1.default)('/data', (ctx) => {
    ctx.status = 200;
    ctx.response.body = ['d', 'a', 't', 'a'];
}));
app.listen(1337);
