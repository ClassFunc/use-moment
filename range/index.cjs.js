"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var range_exports = {};
__export(range_exports, {
  mmRange: () => mmRange,
  mmRangeBy: () => mmRangeBy,
  mmRangeByArray: () => mmRangeByArray,
  mmRangeOnly: () => mmRangeOnly
});
module.exports = __toCommonJS(range_exports);
var Moment = __toESM(require("moment"));
var import_moment_range = require("moment-range");
const mmRange = (0, import_moment_range.extendMoment)(Moment);
const mmRangeOnly = (aTime, bTime) => {
  return mmRange.range(aTime, bTime);
};
const mmRangeBy = (aTime, bTime, by, options) => {
  return mmRange.range(aTime, bTime).by(by);
};
const mmRangeByArray = (aTime, bTime, by, options) => {
  return Array.from(mmRange.range(aTime, bTime).by(by));
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  mmRange,
  mmRangeBy,
  mmRangeByArray,
  mmRangeOnly
});
