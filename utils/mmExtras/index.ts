import moment from "moment";
import {DateMomentString} from "../../common/typeExportTs";

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
    mmIsoWeeksDays
}