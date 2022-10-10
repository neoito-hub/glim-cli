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
exports.clear = exports.remove = exports.save = exports.load = exports.saveString = exports.loadString = void 0;
const async_storage_1 = __importDefault(require("@react-native-async-storage/async-storage"));
/**
 * Loads a string from storage.
 *
 * @param key The key to fetch.
 */
function loadString(key) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield async_storage_1.default.getItem(key);
        }
        catch (_a) {
            // not sure why this would fail... even reading the RN docs I'm unclear
            return null;
        }
    });
}
exports.loadString = loadString;
/**
 * Saves a string to storage.
 *
 * @param key The key to fetch.
 * @param value The value to store.
 */
function saveString(key, value) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield async_storage_1.default.setItem(key, value);
            return true;
        }
        catch (_a) {
            return false;
        }
    });
}
exports.saveString = saveString;
/**
 * Loads something from storage and runs it thru JSON.parse.
 *
 * @param key The key to fetch.
 */
function load(key) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const almostThere = yield async_storage_1.default.getItem(key);
            return JSON.parse(almostThere);
        }
        catch (_a) {
            return null;
        }
    });
}
exports.load = load;
/**
 * Saves an object to storage.
 *
 * @param key The key to fetch.
 * @param value The value to store.
 */
function save(key, value) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield async_storage_1.default.setItem(key, JSON.stringify(value));
            return true;
        }
        catch (_a) {
            return false;
        }
    });
}
exports.save = save;
/**
 * Removes something from storage.
 *
 * @param key The key to kill.
 */
function remove(key) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield async_storage_1.default.removeItem(key);
        }
        catch (_a) { }
    });
}
exports.remove = remove;
/**
 * Burn it all to the ground.
 */
function clear() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield async_storage_1.default.clear();
        }
        catch (_a) { }
    });
}
exports.clear = clear;
