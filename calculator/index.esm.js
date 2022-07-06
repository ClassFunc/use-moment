"use strict";
import moment from "moment";

const mmToDate = (aTime) => {
  return moment(aTime).toDate();
};
const mmAdd = (aTime, amount, unit) => {
  return moment(aTime).add(amount, unit);
};
const mmSubtract = (aTime, amount, unit) => {
  return moment(aTime).subtract(amount, unit);
};
const mmDiff = (aTime, bTime) => {
  return moment(aTime).diff(bTime);
};
const mmSet = (aTime, objectLiteral) => {
  return moment(aTime).set(objectLiteral);
};
const mmDefault = (aTime, valueOf = false) => {
  if (valueOf)
    return moment(aTime).valueOf();
  return moment(aTime);
};
const mmDefaultUTC = (aTime, valueOf = false) => {
  if (valueOf)
    return moment(aTime).utc().valueOf();
  return moment(aTime).utc();
};
const mmDuration = (aTime, bTime, divisor) => {
  return (moment(aTime).valueOf() - moment(bTime).valueOf()) / divisor;
};
const mmDurationUTC = (aTime, bTime, divisor) => {
  return (moment(aTime).utc().valueOf() - moment(bTime).utc().valueOf()) / divisor;
};
export {
  mmAdd,
  mmDefault,
  mmDefaultUTC,
  mmDiff,
  mmDuration,
  mmDurationUTC,
  mmSet,
  mmSubtract,
  mmToDate
};
