import moment from "moment";
import {DateMomentString} from "../../common/typeExportTs";

declare const mmToDate: (aTime: DateMomentString) => Date;
declare const mmCalculatorsAdd: (aTime: DateMomentString, amount: moment.DurationInputArg1, unit: moment.DurationInputArg2) => moment.Moment;
declare const mmCalculatorsSubtract: (aTime: DateMomentString, amount: moment.DurationInputArg1, unit: moment.DurationInputArg2) => moment.Moment;
declare const mmCalculatorsDiff: (aTime: DateMomentString, bTime: DateMomentString) => number;
declare const mmCalculatorsSet: (aTime: DateMomentString, objectLiteral: moment.MomentSetObject) => moment.Moment;
export {mmToDate, mmCalculatorsSet, mmCalculatorsDiff, mmCalculatorsAdd, mmCalculatorsSubtract};
