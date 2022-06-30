"use strict";
import moment from "moment";
import {mmSetLocale} from "../locale";

mmSetLocale("ja");
const mmFormat = (aTime, format = "") => {
  return moment(aTime).format(format);
};
const mmFormatUTC = (aTime, format = "") => {
  return moment(aTime).utc().format(format);
};
const mmFormatDDD = (aTime) => {
  return moment(aTime).format("ddd");
};
const mmFormatDDDD = (aTime) => {
  return moment(aTime).format("dddd");
};
const mmFormatMMDD = (aTime) => {
  return moment(aTime).format("MM/DD");
};
const mmFormatDDMM = (aTime) => {
  return moment(aTime).format("DD/MM");
};
const mmFormatYYYYMMDD = (aTime) => {
  return moment(aTime).format("YYYY-MM-DD");
};
const mmFormatYYYY = (aTime) => {
  return moment(aTime).format("YYYY");
};
const mmFormatYYYYMMDDHHMMSSZ = (aTime) => {
  return moment(aTime).utc().format("YYYYMMDDTHHmmss") + "Z";
};
export {
  mmFormat,
  mmFormatDDD,
  mmFormatDDDD,
  mmFormatDDMM,
  mmFormatMMDD,
  mmFormatUTC,
  mmFormatYYYY,
  mmFormatYYYYMMDD,
  mmFormatYYYYMMDDHHMMSSZ
};