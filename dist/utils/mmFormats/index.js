"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : {"default": mod};
};
Object.defineProperty(exports, "__esModule", {value: true});
exports.mmFormatYYYYMMDDHHMMSSZ = exports.mmFormatYYYY = exports.mmFormatDDMM = exports.mmFormatDDDD = exports.mmFormatYYYYMMDD = exports.mmFormatMMDD = exports.mmFormatDDD = exports.mmFormatUTC = exports.mmFormat = void 0;
const moment_1 = __importDefault(require("moment"));
const mmFormat = (aTime, format = '') => {
    return (0, moment_1.default)(aTime).format(format);
};
exports.mmFormat = mmFormat;
const mmFormatUTC = (aTime, format = '') => {
    return (0, moment_1.default)(aTime).utc().format(format);
};
exports.mmFormatUTC = mmFormatUTC;
const mmFormatDDD = (aTime) => {
    return (0, moment_1.default)(aTime).format("ddd");
};
exports.mmFormatDDD = mmFormatDDD;
const mmFormatDDDD = (aTime) => {
    return (0, moment_1.default)(aTime).format("dddd");
};
exports.mmFormatDDDD = mmFormatDDDD;
const mmFormatMMDD = (aTime) => {
    return (0, moment_1.default)(aTime).format("MM/DD");
};
exports.mmFormatMMDD = mmFormatMMDD;
const mmFormatDDMM = (aTime) => {
    return (0, moment_1.default)(aTime).format("DD/MM");
};
exports.mmFormatDDMM = mmFormatDDMM;
const mmFormatYYYYMMDD = (aTime) => {
    return (0, moment_1.default)(aTime).format("YYYY-MM-DD");
};
exports.mmFormatYYYYMMDD = mmFormatYYYYMMDD;
const mmFormatYYYY = (aTime) => {
    return (0, moment_1.default)(aTime).format("YYYY");
};
exports.mmFormatYYYY = mmFormatYYYY;
const mmFormatYYYYMMDDHHMMSSZ = (aTime) => {
    return (0, moment_1.default)(aTime).utc().format("YYYYMMDDTHHmmss") + "Z";
};
exports.mmFormatYYYYMMDDHHMMSSZ = mmFormatYYYYMMDDHHMMSSZ;
