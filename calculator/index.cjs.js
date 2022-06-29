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
var calculator_exports = {};
__export(calculator_exports, {
  mmAdd: () => mmAdd,
  mmDiff: () => mmDiff,
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  mmAdd,
  mmDiff,
  mmSet,
  mmSubtract,
  mmToDate
});
