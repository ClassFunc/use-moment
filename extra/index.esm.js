"use strict";
import moment from "moment";
import {isUndefined} from "lodash";

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
const mmWeekDay = (aTime, week, day) => {
  return moment(aTime).week(week).day(day);
};
const mmWeekDays = (aTime, weeks, days) => {
  return moment(aTime).week(weeks).days(days);
};
const mmWeeksDay = (aTime, week, day) => {
  return moment(aTime).weeks(week).day(day);
};
const mmWeeksDays = (aTime, weeks, days) => {
  return moment(aTime).weeks(weeks).days(days);
};
const mmWeek = (aTime, week) => {
  if (!isUndefined(week))
    return moment(aTime).week(week);
  return moment(aTime).week();
};
const mmWeeks = (aTime, week) => {
  if (!isUndefined(week))
    return moment(aTime).weeks(week);
  return moment(aTime).weeks();
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
  mmStartOfWeeks,
  mmWeek,
  mmWeekDay,
  mmWeekDays,
  mmWeeks,
  mmWeeksDay,
  mmWeeksDays
};
