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
var extra_exports = {};
__export(extra_exports, {
    mmEndOfDay: () => mmEndOfDay,
    mmEndOfIsoWeeks: () => mmEndOfIsoWeeks,
    mmEndOfMonth: () => mmEndOfMonth,
    mmEndOfMonths: () => mmEndOfMonths,
    mmEndOfWeek: () => mmEndOfWeek,
    mmEndOfWeeks: () => mmEndOfWeeks,
    mmIsoWeekDay: () => mmIsoWeekDay,
    mmIsoWeeksDays: () => mmIsoWeeksDays,
    mmStartOfDay: () => mmStartOfDay,
    mmStartOfIsoWeeks: () => mmStartOfIsoWeeks,
    mmStartOfMonth: () => mmStartOfMonth,
    mmStartOfMonths: () => mmStartOfMonths,
    mmStartOfWeeks: () => mmStartOfWeeks,
    mmWeek: () => mmWeek,
    mmWeekDay: () => mmWeekDay,
    mmWeekDays: () => mmWeekDays,
    mmWeeks: () => mmWeeks,
    mmWeeksDay: () => mmWeeksDay,
    mmWeeksDays: () => mmWeeksDays
});
module.exports = __toCommonJS(extra_exports);
var import_moment = __toESM(require("moment"));
var import_lodash = require("lodash");
const mmStartOfDay = (aTime) => {
    return (0, import_moment.default)(aTime).startOf("day");
};
const mmStartOfWeeks = (aTime) => {
  return (0, import_moment.default)(aTime).startOf("weeks");
};
const mmStartOfIsoWeeks = (aTime) => {
  return (0, import_moment.default)(aTime).startOf("isoWeeks");
};
const mmStartOfMonth = (aTime) => {
  return (0, import_moment.default)(aTime).startOf("month");
};
const mmStartOfMonths = (aTime) => {
  return (0, import_moment.default)(aTime).startOf("months");
};
const mmEndOfDay = (aTime) => {
  return (0, import_moment.default)(aTime).endOf("day");
};
const mmEndOfWeek = (aTime) => {
  return (0, import_moment.default)(aTime).endOf("week");
};
const mmEndOfWeeks = (aTime) => {
  return (0, import_moment.default)(aTime).endOf("weeks");
};
const mmEndOfIsoWeeks = (aTime) => {
  return (0, import_moment.default)(aTime).endOf("isoWeeks");
};
const mmEndOfMonth = (aTime) => {
  return (0, import_moment.default)(aTime).endOf("month");
};
const mmEndOfMonths = (aTime) => {
    return (0, import_moment.default)(aTime).endOf("months");
};
const mmIsoWeekDay = (aTime, week, day) => {
    return (0, import_moment.default)(aTime).isoWeek(week).day(day);
};
const mmIsoWeeksDays = (aTime, weeks, days) => {
    return (0, import_moment.default)(aTime).isoWeeks(weeks).days(days);
};
const mmWeekDay = (aTime, week, day) => {
    return (0, import_moment.default)(aTime).week(week).day(day);
};
const mmWeekDays = (aTime, weeks, days) => {
    return (0, import_moment.default)(aTime).week(weeks).days(days);
};
const mmWeeksDay = (aTime, week, day) => {
    return (0, import_moment.default)(aTime).weeks(week).day(day);
};
const mmWeeksDays = (aTime, weeks, days) => {
    return (0, import_moment.default)(aTime).weeks(weeks).days(days);
};
const mmWeek = (aTime, week) => {
    if (!(0, import_lodash.isUndefined)(week))
        return (0, import_moment.default)(aTime).week(week);
    return (0, import_moment.default)(aTime).week();
};
const mmWeeks = (aTime, week) => {
    if (!(0, import_lodash.isUndefined)(week))
        return (0, import_moment.default)(aTime).weeks(week);
    return (0, import_moment.default)(aTime).weeks();
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    mmEndOfDay,
    mmEndOfIsoWeeks,
    mmEndOfMonth,
    mmEndOfMonths,
    mmEndOfWeek,
    mmEndOfWeeks,
    mmIsoWeekDay,
    mmIsoWeeksDays,
    mmStartOfDay,
    mmStartOfIsoWeeks,
    mmStartOfMonth,
    mmStartOfMonths,
    mmStartOfWeeks,
    mmWeek,
    mmWeekDay,
    mmWeekDays,
    mmWeeks,
    mmWeeksDay,
    mmWeeksDays
});
