"use strict";
import moment from "moment";

const mmStartOfDay = (aTime) => {
  return moment(aTime).startOf("day");
};
const mmStartOfWeeks = (aTime) => {
  return moment(aTime).startOf("weeks");
};
const mmStartOfIsoWeeks = (aTime) => {
  return moment(aTime).startOf("isoWeeks");
};
const mmStartOfMonth = (aTime) => {
  return moment(aTime).startOf("month");
};
const mmStartOfMonths = (aTime) => {
  return moment(aTime).startOf("months");
};
const mmEndOfDay = (aTime) => {
  return moment(aTime).endOf("day");
};
const mmEndOfWeek = (aTime) => {
  return moment(aTime).endOf("week");
};
const mmEndOfWeeks = (aTime) => {
  return moment(aTime).endOf("weeks");
};
const mmEndOfIsoWeeks = (aTime) => {
  return moment(aTime).endOf("isoWeeks");
};
const mmEndOfMonth = (aTime) => {
  return moment(aTime).endOf("month");
};
const mmEndOfMonths = (aTime) => {
  return moment(aTime).endOf("months");
};
const mmIsoWeekDay = (aTime, week, day) => {
  return moment(aTime).isoWeek(week).day(day);
};
const mmIsoWeeksDays = (aTime, weeks, days) => {
  return moment(aTime).isoWeeks(weeks).days(days);
};
export {
  mmEndOfDay,
  mmEndOfIsoWeeks,
  mmEndOfMonth,
  mmEndOfMonths,
  mmEndOfWeek,
  mmEndOfWeeks,
  mmIsoWeekDay,
  mmIsoWeeksDays,
  mmStartOfDay,
  mmStartOfIsoWeeks,
  mmStartOfMonth,
  mmStartOfMonths,
  mmStartOfWeeks
};
