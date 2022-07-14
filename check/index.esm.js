"use strict";
import moment from "moment";

const mmIsSame = (aTime, bTime, granularity) => {
  return moment(aTime).isSame(bTime, granularity);
};
const mmIsBetween = (aTime, bTime, cTime, granularity, inclusivity) => {
  return moment(aTime).isBetween(bTime, cTime, granularity, inclusivity);
};
const mmIsBefore = (aTime, bTime, granularity) => {
  return moment(aTime).isBefore(bTime, granularity);
};
const mmIsSameOrBefore = (aTime, bTime, granularity) => {
  return moment(aTime).isSameOrBefore(bTime, granularity);
};
const mmIsAfter = (aTime, bTime, granularity) => {
  return moment(aTime).isAfter(bTime, granularity);
};
const mmIsSameOrAfter = (aTime, bTime, granularity) => {
  return moment(aTime).isAfter(bTime, granularity);
};
const mmIsSameDate = (aTime, bTime, granularity = "date") => {
  return moment(aTime).isSame(bTime, granularity);
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
