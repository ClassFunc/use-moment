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
var calculator_exports = {};
__export(calculator_exports, {
  mmAdd: () => mmAdd,
  mmDefault: () => mmDefault,
  mmDefaultUTC: () => mmDefaultUTC,
  mmDiff: () => mmDiff,
  mmDuration: () => mmDuration,
  mmDurationUTC: () => mmDurationUTC,
  mmSet: () => mmSet,
  mmSubtract: () => mmSubtract,
  mmToDate: () => mmToDate
});
module.exports = __toCommonJS(calculator_exports);
var import_moment = __toESM(require("moment"));
const mmToDate = (aTime) => {
  return (0, import_moment.default)(aTime).toDate();
};
const mmAdd = (aTime, amount, unit) => {
  return (0, import_moment.default)(aTime).add(amount, unit);
};
const mmSubtract = (aTime, amount, unit) => {
  return (0, import_moment.default)(aTime).subtract(amount, unit);
};
const mmDiff = (aTime, bTime) => {
  return (0, import_moment.default)(aTime).diff(bTime);
};
const mmSet = (aTime, objectLiteral) => {
  return (0, import_moment.default)(aTime).set(objectLiteral);
};
const mmDefault = (aTime, valueOf = false) => {
  if (valueOf)
    return (0, import_moment.default)(aTime).valueOf();
  return (0, import_moment.default)(aTime);
};
const mmDefaultUTC = (aTime, valueOf = false) => {
  if (valueOf)
    return (0, import_moment.default)(aTime).utc().valueOf();
  return (0, import_moment.default)(aTime).utc();
};
const mmDuration = (aTime, bTime, divisor) => {
  return ((0, import_moment.default)(aTime).valueOf() - (0, import_moment.default)(bTime).valueOf()) / divisor;
};
const mmDurationUTC = (aTime, bTime, divisor) => {
  return ((0, import_moment.default)(aTime).utc().valueOf() - (0, import_moment.default)(bTime).utc().valueOf()) / divisor;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  mmAdd,
  mmDefault,
  mmDefaultUTC,
  mmDiff,
  mmDuration,
  mmDurationUTC,
  mmSet,
  mmSubtract,
  mmToDate
});
