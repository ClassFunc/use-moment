/// <reference types="moment-range" />
/// <reference types="moment-timezone" />
import * as moment from 'moment';
import {unitOfTime} from 'moment';
import {DateMoment} from '../../common/typeExportTs';

declare const mmRange: import("moment-range").MomentRange & typeof import("moment");
declare const mmRangeOnly: (aTime: DateMoment, bTime: DateMoment) => import("moment-range").DateRange;
declare const mmRangeBy: (aTime: DateMoment, bTime: DateMoment, by: unitOfTime.Diff, options?: {
    excludeEnd?: boolean;
    step?: number;
}) => Iterable<moment.Moment>;
declare const mmRangeByArray: (aTime: DateMoment, bTime: DateMoment, by: unitOfTime.Diff, options?: {
    excludeEnd?: boolean;
    step?: number;
}) => moment.Moment[];
export {mmRange, mmRangeOnly, mmRangeBy, mmRangeByArray};
