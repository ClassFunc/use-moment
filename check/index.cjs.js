"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
    for (var name in all)
        __defProp(target, name, {get: all[name], enumerable: true});
};
var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))
            if (!__hasOwnProp.call(to, key) && key !== except)
                __defProp(to, key, {
                    get: () => from[key],
                    enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
                });
    }
    return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
    value: mod,
    enumerable: true
}) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", {value: true}), mod);
var check_exports = {};
__export(check_exports, {
    mmIsAfter: () => mmIsAfter,
    mmIsBefore: () => mmIsBefore,
    mmIsSame: () => mmIsSame,
    mmIsSameDate: () => mmIsSameDate,
    mmIsSameOrAfter: () => mmIsSameOrAfter,
    mmIsSameOrBefore: () => mmIsSameOrBefore
});
module.exports = __toCommonJS(check_exports);
var import_moment = __toESM(require("moment"));
const mmIsSame = (aTime, bTime) => {
    return (0, import_moment.default)(aTime).isSame(bTime);
};
const mmIsBefore = (aTime, bTime) => {
    return (0, import_moment.default)(aTime).isBefore(bTime);
};
const mmIsSameOrBefore = (aTime, bTime) => {
    return (0, import_moment.default)(aTime).isSameOrBefore(bTime);
};
const mmIsAfter = (aTime, bTime) => {
    return (0, import_moment.default)(aTime).isAfter(bTime);
};
const mmIsSameOrAfter = (aTime, bTime) => {
    return (0, import_moment.default)(aTime).isAfter(bTime);
};
const mmIsSameDate = (aTime, bTime) => {
    return (0, import_moment.default)(aTime).isSame(bTime, "date");
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    mmIsAfter,
    mmIsBefore,
    mmIsSame,
    mmIsSameDate,
    mmIsSameOrAfter,
    mmIsSameOrBefore
});
