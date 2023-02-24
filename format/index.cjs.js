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
      ? __defProp(target, "default", { value: mod, enumerable: true })
      : target,
    mod
  )
);
var __toCommonJS = (mod) =>
  __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var format_exports = {};
__export(format_exports, {
  mmExp: () => mmExp,
  mmFormat: () => mmFormat,
  mmFormatDDD: () => mmFormatDDD,
  mmFormatDDDD: () => mmFormatDDDD,
  mmFormatDDMM: () => mmFormatDDMM,
  mmFormatMMDD: () => mmFormatMMDD,
  mmFormatUTC: () => mmFormatUTC,
  mmFormatYYYY: () => mmFormatYYYY,
  mmFormatYYYYMMDD: () => mmFormatYYYYMMDD,
  mmFormatYYYYMMDDHHMMSSZ: () => mmFormatYYYYMMDDHHMMSSZ,
});
module.exports = __toCommonJS(format_exports);
var import_moment = __toESM(require("moment"));
const mmFormat = (aTime, format = "") => {
  return (0, import_moment.default)(aTime).format(format);
};
const mmFormatUTC = (aTime, format = "") => {
  return (0, import_moment.default)(aTime).utc().format(format);
};
const mmFormatDDD = (aTime) => {
  return (0, import_moment.default)(aTime).format("ddd");
};
const mmFormatDDDD = (aTime) => {
  return (0, import_moment.default)(aTime).format("dddd");
};
const mmFormatMMDD = (aTime) => {
  return (0, import_moment.default)(aTime).format("MM/DD");
};
const mmFormatDDMM = (aTime) => {
  return (0, import_moment.default)(aTime).format("DD/MM");
};
const mmFormatYYYYMMDD = (aTime) => {
  return (0, import_moment.default)(aTime).format("YYYY-MM-DD");
};
const mmFormatYYYY = (aTime) => {
  return (0, import_moment.default)(aTime).format("YYYY");
};
const mmFormatYYYYMMDDHHMMSSZ = (aTime) => {
  return (
    (0, import_moment.default)(aTime).utc().format("YYYYMMDDTHHmmss") + "Z"
  );
};
const mmExp = (aTime) => {
  return (0, import_moment.default)(aTime);
};
// Annotate the CommonJS export names for ESM import in node:
0 &&
  (module.exports = {
    mmExp,
    mmFormat,
    mmFormatDDD,
    mmFormatDDDD,
    mmFormatDDMM,
    mmFormatMMDD,
    mmFormatUTC,
    mmFormatYYYY,
    mmFormatYYYYMMDD,
    mmFormatYYYYMMDDHHMMSSZ,
  });
