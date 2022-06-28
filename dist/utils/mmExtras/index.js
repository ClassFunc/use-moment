"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : {"default": mod};
};
Object.defineProperty(exports, "__esModule", {value: true});
exports.mmIsoWeeksDays = exports.mmIsoWeekDay = exports.mmEndOfMonths = exports.mmEndOfMonth = exports.mmEndOfIsoWeeks = exports.mmEndOfWeeks = exports.mmEndOfWeek = exports.mmEndOfDay = exports.mmStartOfMonths = exports.mmStartOfMonth = exports.mmStartOfIsoWeeks = exports.mmStartOfWeeks = exports.mmStartOfDay = void 0;
const moment_1 = __importDefault(require("moment"));
const mmStartOfDay = (aTime) => {
    return (0, moment_1.default)(aTime).startOf("day");
};
exports.mmStartOfDay = mmStartOfDay;
const mmStartOfWeeks = (aTime) => {
    return (0, moment_1.default)(aTime).startOf("weeks");
};
exports.mmStartOfWeeks = mmStartOfWeeks;
const mmStartOfIsoWeeks = (aTime) => {
    return (0, moment_1.default)(aTime).startOf("isoWeeks");
};
exports.mmStartOfIsoWeeks = mmStartOfIsoWeeks;
const mmStartOfMonth = (aTime) => {
    return (0, moment_1.default)(aTime).startOf("month");
};
exports.mmStartOfMonth = mmStartOfMonth;
const mmStartOfMonths = (aTime) => {
    return (0, moment_1.default)(aTime).startOf("months");
};
exports.mmStartOfMonths = mmStartOfMonths;
const mmEndOfDay = (aTime) => {
    return (0, moment_1.default)(aTime).endOf("day");
};
exports.mmEndOfDay = mmEndOfDay;
const mmEndOfWeek = (aTime) => {
    return (0, moment_1.default)(aTime).endOf("week");
};
exports.mmEndOfWeek = mmEndOfWeek;
const mmEndOfWeeks = (aTime) => {
    return (0, moment_1.default)(aTime).endOf("weeks");
};
exports.mmEndOfWeeks = mmEndOfWeeks;
const mmEndOfIsoWeeks = (aTime) => {
    return (0, moment_1.default)(aTime).endOf("isoWeeks");
};
exports.mmEndOfIsoWeeks = mmEndOfIsoWeeks;
const mmEndOfMonth = (aTime) => {
    return (0, moment_1.default)(aTime).endOf("month");
};
exports.mmEndOfMonth = mmEndOfMonth;
const mmEndOfMonths = (aTime) => {
    return (0, moment_1.default)(aTime).endOf("months");
};
exports.mmEndOfMonths = mmEndOfMonths;
const mmIsoWeekDay = (aTime, week, day) => {
    return (0, moment_1.default)(aTime).isoWeek(week).day(day);
};
exports.mmIsoWeekDay = mmIsoWeekDay;
const mmIsoWeeksDays = (aTime, weeks, days) => {
    return (0, moment_1.default)(aTime).isoWeeks(weeks).days(days);
};
exports.mmIsoWeeksDays = mmIsoWeeksDays;
