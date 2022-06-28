"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : {"default": mod};
};
Object.defineProperty(exports, "__esModule", {value: true});
exports.mmGuestZone = exports.mmByZone = void 0;
const moment_timezone_1 = __importDefault(require("moment-timezone"));
const mmByZone = (time, zone) => {
    return moment_timezone_1.default.tz(time, zone);
};
exports.mmByZone = mmByZone;
const mmGuestZone = () => {
    return moment_timezone_1.default.tz.guess();
};
exports.mmGuestZone = mmGuestZone;
