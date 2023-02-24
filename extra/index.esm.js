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
    if (!isUndefined(week)) return moment(aTime).week(week);
  return moment(aTime).week();
};
const mmWeeks = (aTime, week) => {
    if (!isUndefined(week)) return moment(aTime).weeks(week);
  return moment(aTime).weeks();
};
const mmMonth = (aTime, month) => {
    if (!isUndefined(month)) return moment(aTime).month(month);
  return moment(aTime).month();
};
const mmMonths = (aTime, month) => {
    if (!isUndefined(month)) return moment(aTime).months(month);
  return moment(aTime).months();
};
const mmDate = (aTime, date) => {
    if (!isUndefined(date)) return moment(aTime).date(date);
  return moment(aTime).month();
};
const mmDates = (aTime, date) => {
    if (!isUndefined(date)) return moment(aTime).dates(date);
  return moment(aTime).dates();
};
const mmWeekday = (aTime, day) => {
    if (!isUndefined(day)) return moment(aTime).weekday(day);
  return moment(aTime).weekday();
};
const mmIsoWeekday = (aTime, day) => {
    if (!isUndefined(day)) return moment(aTime).isoWeekday(day);
  return moment(aTime).isoWeekday();
};
export {
  mmDate,
  mmDates,
  mmEndOfDay,
  mmEndOfIsoWeeks,
  mmEndOfMonth,
  mmEndOfMonths,
  mmEndOfWeek,
  mmEndOfWeeks,
  mmIsoWeekDay,
  mmIsoWeekday,
  mmIsoWeeksDays,
  mmMonth,
  mmMonths,
  mmStartOfDay,
    mmStartOfIsoWeeks,
    mmStartOfMonth,
    mmStartOfMonths,
    mmStartOfWeeks,
    mmWeek,
    mmWeekDay,
    mmWeekDays,
    mmWeekday,
    mmWeeks,
    mmWeeksDay,
    mmWeeksDays,
};
