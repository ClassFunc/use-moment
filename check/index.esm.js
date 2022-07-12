"use strict";
import moment from "moment";

const mmIsSame = (aTime, bTime) => {
  return moment(aTime).isSame(bTime);
};
const mmIsBetween = (aTime, bTime, cTime) => {
  return moment(aTime).isBetween(bTime, cTime);
};
const mmIsBefore = (aTime, bTime) => {
  return moment(aTime).isBefore(bTime);
};
const mmIsSameOrBefore = (aTime, bTime) => {
  return moment(aTime).isSameOrBefore(bTime);
};
const mmIsAfter = (aTime, bTime) => {
  return moment(aTime).isAfter(bTime);
};
const mmIsSameOrAfter = (aTime, bTime) => {
  return moment(aTime).isAfter(bTime);
};
const mmIsSameDate = (aTime, bTime) => {
  return moment(aTime).isSame(bTime, "date");
};
export {
  mmIsAfter,
  mmIsBefore,
  mmIsBetween,
  mmIsSame,
  mmIsSameDate,
  mmIsSameOrAfter,
  mmIsSameOrBefore
};
