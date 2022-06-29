import moment from "moment";
declare type DateMomentString = Date | string | moment.Moment;
declare const mmToDate: (aTime: DateMomentString) => Date;
declare const mmAdd: (aTime: DateMomentString, amount: moment.DurationInputArg1, unit: moment.DurationInputArg2) => moment.Moment;
declare const mmSubtract: (aTime: DateMomentString, amount: moment.DurationInputArg1, unit: moment.DurationInputArg2) => moment.Moment;
declare const mmDiff: (aTime: DateMomentString, bTime: DateMomentString) => number;
declare const mmSet: (aTime: DateMomentString, objectLiteral: moment.MomentSetObject) => moment.Moment;
export { mmToDate, mmSet, mmDiff, mmAdd, mmSubtract };
