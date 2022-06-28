"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true, get: function () {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
}) : (function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function (o, v) {
    Object.defineProperty(o, "default", {enumerable: true, value: v});
}) : function (o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", {value: true});
exports.mmRangeByArray = exports.mmRangeBy = exports.mmRangeOnly = exports.mmRange = void 0;
const moment = __importStar(require("moment"));
const moment_range_1 = require("moment-range");
const mmRange = (0, moment_range_1.extendMoment)(moment);
exports.mmRange = mmRange;
const mmRangeOnly = (aTime, bTime) => {
    return mmRange.range(aTime, bTime);
};
exports.mmRangeOnly = mmRangeOnly;
const mmRangeBy = (aTime, bTime, by, options) => {
    return mmRange.range(aTime, bTime).by(by);
};
exports.mmRangeBy = mmRangeBy;
const mmRangeByArray = (aTime, bTime, by, options) => {
    return Array.from(mmRange.range(aTime, bTime).by(by));
};
exports.mmRangeByArray = mmRangeByArray;
