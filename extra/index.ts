import moment from "moment";
import {isUndefined} from "lodash";

type DateMomentString = Date | string | moment.Moment

const mmStartOfDay = (aTime: DateMomentString) => {
    return moment(aTime).startOf("day")
}

const mmStartOfWeeks = (aTime: DateMomentString) => {
    return moment(aTime).startOf("weeks")
}

const mmStartOfIsoWeeks = (aTime: DateMomentString) => {
    return moment(aTime).startOf("isoWeeks")
}

const mmStartOfMonth = (aTime: DateMomentString) => {
    return moment(aTime).startOf("month")
}

const mmStartOfMonths = (aTime: DateMomentString) => {
    return moment(aTime).startOf("months")
}

const mmEndOfDay = (aTime: DateMomentString) => {
    return moment(aTime).endOf("day")
}

const mmEndOfWeek = (aTime: DateMomentString) => {
    return moment(aTime).endOf("week")
}

const mmEndOfWeeks = (aTime: DateMomentString) => {
    return moment(aTime).endOf("weeks")
}

const mmEndOfIsoWeeks = (aTime: DateMomentString) => {
    return moment(aTime).endOf("isoWeeks")
}

const mmEndOfMonth = (aTime: DateMomentString) => {
    return moment(aTime).endOf("month")
}

const mmEndOfMonths = (aTime: DateMomentString) => {
    return moment(aTime).endOf("months")
}

const mmIsoWeekDay = (aTime: DateMomentString, week: number, day: number) => {
    return moment(aTime).isoWeek(week).day(day)
}

const mmIsoWeeksDays = (aTime: DateMomentString, weeks: number, days: number) => {
    return moment(aTime).isoWeeks(weeks).days(days)
}

const mmWeekDay = (aTime: DateMomentString, week: number, day: number) => {
    return moment(aTime).week(week).day(day)
}

const mmWeekDays = (aTime: DateMomentString, weeks: number, days: number) => {
    return moment(aTime).week(weeks).days(days)
}

const mmWeeksDay = (aTime: DateMomentString, week: number, day: number) => {
    return moment(aTime).weeks(week).day(day)
}

const mmWeeksDays = (aTime: DateMomentString, weeks: number, days: number) => {
    return moment(aTime).weeks(weeks).days(days)
}

const mmWeek = (aTime: DateMomentString, week?: number) => {
    if (!isUndefined(week))
        return moment(aTime).week(week)
    return moment(aTime).week()
}

const mmWeeks = (aTime: DateMomentString, week?: number) => {
    if (!isUndefined(week))
        return moment(aTime).weeks(week)
    return moment(aTime).weeks()
}

const mmMonth = (aTime: DateMomentString, month?: number | string) => {
    if (!isUndefined(month))
        return moment(aTime).month(month)
    return moment(aTime).month()
}

const mmMonths = (aTime: DateMomentString, month?: number | string) => {
    if (!isUndefined(month))
        return moment(aTime).months(month)
    return moment(aTime).months()
}

const mmDate = (aTime: DateMomentString, date?: number) => {
    if (!isUndefined(date))
        return moment(aTime).date(date)
    return moment(aTime).month()
}

const mmDates = (aTime: DateMomentString, date?: number) => {
    if (!isUndefined(date))
        return moment(aTime).dates(date)
    return moment(aTime).dates()
}

export {
    mmStartOfDay,
    mmStartOfWeeks,
    mmStartOfIsoWeeks,
    mmStartOfMonth,
    mmStartOfMonths,
    mmEndOfDay,
    mmEndOfWeek,
    mmEndOfWeeks,
    mmEndOfIsoWeeks,
    mmEndOfMonth,
    mmEndOfMonths,
    mmIsoWeekDay,
    mmIsoWeeksDays,
    mmWeek,
    mmWeeks,
    mmWeekDay,
    mmWeekDays,
    mmWeeksDay,
    mmWeeksDays,
    mmDate,
    mmDates,
    mmMonth,
    mmMonths
}