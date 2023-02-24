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
var timezone_exports = {};
__export(timezone_exports, {
  mmByZone: () => mmByZone,
  mmGTM: () => mmGTM,
  mmGuestZone: () => mmGuestZone,
});
module.exports = __toCommonJS(timezone_exports);
var import_moment_timezone = __toESM(require("moment-timezone"));
var import_moment = __toESM(require("moment"));
const mmByZone = (time, zone) => {
  return import_moment_timezone.default.tz(time, zone);
};
const mmGuestZone = () => {
  return import_moment_timezone.default.tz.guess();
};
const mmGTM = (timezone) => {
  let result;
  const tz = timezone
    ? +import_moment.default.tz(timezone).format("ZZ") / 100
    : +(0, import_moment.default)().format("ZZ") / 100;
  const isInt = Number.isInteger(tz);
  if (!isInt) {
    result = `${`${tz}`.replace(".", ":")}0`;
    result = ["-", "+"].includes(`${result}`.charAt(0))
      ? `${result}`
      : `+${result}`;
  } else {
    result = ["-", "+"].includes(`${tz}`.charAt(0)) ? `${tz}` : `+${tz}`;
  }
  return `GTM${result}`;
};
// Annotate the CommonJS export names for ESM import in node:
0 &&
  (module.exports = {
    mmByZone,
    mmGTM,
    mmGuestZone,
  });
