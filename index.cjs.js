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
    if ((from && typeof from === "object") || typeof from === "function") {
        for (let key of __getOwnPropNames(from))
            if (!__hasOwnProp.call(to, key) && key !== except)
                __defProp(to, key, {
                    get: () => from[key],
                    enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable,
                });
    }
    return to;
};
var __toESM = (mod, isNodeMode, target) => (
    (target = mod != null ? __create(__getProtoOf(mod)) : {}),
        __copyProps(
            // If the importer is in node compatibility mode or this is not an ESM
            // file that has been converted to a CommonJS file using a Babel-
            // compatible transform (i.e. "__esModule" has not been set), then set
            // "default" to the CommonJS "module.exports" for node compatibility.
            isNodeMode || !mod || !mod.__esModule
                ? __defProp(target, "default", {value: mod, enumerable: true})
                : target,
            mod
        )
);
var __toCommonJS = (mod) =>
    __copyProps(__defProp({}, "__esModule", {value: true}), mod);
var use_moment_exports = {};
__export(use_moment_exports, {
    mmCalculators: () => mmCalculators,
    mmChecks: () => mmChecks,
    mmExtras: () => mmExtras,
    mmFormats: () => mmFormats,
    mmLocales: () => mmLocales,
    mmRanges: () => mmRanges,
    mmTimezone: () => mmTimezone,
});
module.exports = __toCommonJS(use_moment_exports);
var mmChecks = __toESM(require("./check"));
var mmFormats = __toESM(require("./format"));
var mmCalculators = __toESM(require("./calculator"));
var mmLocales = __toESM(require("./locale"));
var mmExtras = __toESM(require("./extra"));
var mmRanges = __toESM(require("./range"));
var mmTimezone = __toESM(require("./timezone"));
// Annotate the CommonJS export names for ESM import in node:
0 &&
(module.exports = {
    mmCalculators,
    mmChecks,
    mmExtras,
    mmFormats,
    mmLocales,
    mmRanges,
    mmTimezone,
});
