/// <reference types="moment-range" />
import * as Moment from "moment";
import moment, { unitOfTime } from "moment";
declare type DateMoment = Date | moment.Moment;
declare const mmRange: import("moment-range").MomentRange & typeof import("moment");
declare const mmRangeOnly: (aTime: DateMoment, bTime: DateMoment) => import("moment-range").DateRange;
declare const mmRangeBy: (aTime: DateMoment, bTime: DateMoment, by: unitOfTime.Diff, options?: {
    excludeEnd?: boolean;
    step?: number;
}) => Iterable<Moment.Moment>;
declare const mmRangeByArray: (aTime: DateMoment, bTime: DateMoment, by: unitOfTime.Diff, options?: {
    excludeEnd?: boolean;
    step?: number;
}) => Moment.Moment[];
export { mmRange, mmRangeOnly, mmRangeBy, mmRangeByArray };
