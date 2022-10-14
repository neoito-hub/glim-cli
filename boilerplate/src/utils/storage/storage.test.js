"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const async_storage_1 = __importDefault(require("@react-native-async-storage/async-storage"));
const storage_1 = require("./storage");
// fixtures
const VALUE_OBJECT = { x: 1 };
const VALUE_STRING = JSON.stringify(VALUE_OBJECT);
beforeEach(() => async_storage_1.default.getItem.mockReturnValue(Promise.resolve(VALUE_STRING)));
afterEach(() => jest.clearAllMocks());
test("load", () => __awaiter(void 0, void 0, void 0, function* () {
    const value = yield (0, storage_1.load)("something");
    expect(value).toEqual(JSON.parse(VALUE_STRING));
}));
test("loadString", () => __awaiter(void 0, void 0, void 0, function* () {
    const value = yield (0, storage_1.loadString)("something");
    expect(value).toEqual(VALUE_STRING);
}));
test("save", () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, storage_1.save)("something", VALUE_OBJECT);
    expect(async_storage_1.default.setItem).toHaveBeenCalledWith("something", VALUE_STRING);
}));
test("saveString", () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, storage_1.saveString)("something", VALUE_STRING);
    expect(async_storage_1.default.setItem).toHaveBeenCalledWith("something", VALUE_STRING);
}));
test("remove", () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, storage_1.remove)("something");
    expect(async_storage_1.default.removeItem).toHaveBeenCalledWith("something");
}));
test("clear", () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, storage_1.clear)();
    expect(async_storage_1.default.clear).toHaveBeenCalledWith();
}));
