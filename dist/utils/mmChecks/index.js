"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : {"default": mod};
};
Object.defineProperty(exports, "__esModule", {value: true});
exports.mmIsSameDate = exports.mmIsSameOrBefore = exports.mmIsSameOrAfter = exports.mmIsBefore = exports.mmIsAfter = exports.mmIsSame = void 0;
const moment_1 = __importDefault(require("moment"));
const mmIsSame = (aTime, bTime) => {
    return (0, moment_1.default)(aTime).isSame(bTime);
};
exports.mmIsSame = mmIsSame;
const mmIsBefore = (aTime, bTime) => {
    return (0, moment_1.default)(aTime).isBefore(bTime);
};
exports.mmIsBefore = mmIsBefore;
const mmIsSameOrBefore = (aTime, bTime) => {
    return (0, moment_1.default)(aTime).isSameOrBefore(bTime);
};
exports.mmIsSameOrBefore = mmIsSameOrBefore;
const mmIsAfter = (aTime, bTime) => {
    return (0, moment_1.default)(aTime).isAfter(bTime);
};
exports.mmIsAfter = mmIsAfter;
const mmIsSameOrAfter = (aTime, bTime) => {
    return (0, moment_1.default)(aTime).isAfter(bTime);
};
exports.mmIsSameOrAfter = mmIsSameOrAfter;
const mmIsSameDate = (aTime, bTime) => {
    return (0, moment_1.default)(aTime).isSame(bTime, 'date');
};
exports.mmIsSameDate = mmIsSameDate;
