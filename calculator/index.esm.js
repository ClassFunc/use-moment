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
export {
  mmAdd,
  mmDiff,
  mmSet,
  mmSubtract,
  mmToDate
};
