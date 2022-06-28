"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : {"default": mod};
};
Object.defineProperty(exports, "__esModule", {value: true});
exports.mmCalculatorsSubtract = exports.mmCalculatorsAdd = exports.mmCalculatorsDiff = exports.mmCalculatorsSet = exports.mmToDate = void 0;
const moment_1 = __importDefault(require("moment"));
const mmToDate = (aTime) => {
    return (0, moment_1.default)(aTime).toDate();
};
exports.mmToDate = mmToDate;
const mmCalculatorsAdd = (aTime, amount, unit) => {
    return (0, moment_1.default)(aTime).add(amount, unit);
};
exports.mmCalculatorsAdd = mmCalculatorsAdd;
const mmCalculatorsSubtract = (aTime, amount, unit) => {
    return (0, moment_1.default)(aTime).subtract(amount, unit);
};
exports.mmCalculatorsSubtract = mmCalculatorsSubtract;
const mmCalculatorsDiff = (aTime, bTime) => {
    return (0, moment_1.default)(aTime).diff(bTime);
};
exports.mmCalculatorsDiff = mmCalculatorsDiff;
const mmCalculatorsSet = (aTime, objectLiteral) => {
    return (0, moment_1.default)(aTime).set(objectLiteral);
};
exports.mmCalculatorsSet = mmCalculatorsSet;
