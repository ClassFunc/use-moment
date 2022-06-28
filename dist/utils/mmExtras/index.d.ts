import moment from "moment";
import {DateMomentString} from "../../common/typeExportTs";

declare const mmStartOfDay: (aTime: DateMomentString) => moment.Moment;
declare const mmStartOfWeeks: (aTime: DateMomentString) => moment.Moment;
declare const mmStartOfIsoWeeks: (aTime: DateMomentString) => moment.Moment;
declare const mmStartOfMonth: (aTime: DateMomentString) => moment.Moment;
declare const mmStartOfMonths: (aTime: DateMomentString) => moment.Moment;
declare const mmEndOfDay: (aTime: DateMomentString) => moment.Moment;
declare const mmEndOfWeek: (aTime: DateMomentString) => moment.Moment;
declare const mmEndOfWeeks: (aTime: DateMomentString) => moment.Moment;
declare const mmEndOfIsoWeeks: (aTime: DateMomentString) => moment.Moment;
declare const mmEndOfMonth: (aTime: DateMomentString) => moment.Moment;
declare const mmEndOfMonths: (aTime: DateMomentString) => moment.Moment;
declare const mmIsoWeekDay: (aTime: DateMomentString, week: number, day: number) => moment.Moment;
declare const mmIsoWeeksDays: (aTime: DateMomentString, weeks: number, days: number) => moment.Moment;
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
};
