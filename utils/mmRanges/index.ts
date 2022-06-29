import * as Moment from "moment";
import {unitOfTime} from "moment";
import {extendMoment} from 'moment-range';
import {DateMoment} from '../../common/typeExportTs';

const mmRange = extendMoment(Moment);

const mmRangeOnly = (aTime: DateMoment, bTime: DateMoment) => {
    return mmRange.range(aTime, bTime)
}

const mmRangeBy = (aTime: DateMoment, bTime: DateMoment, by: unitOfTime.Diff, options?: { excludeEnd?: boolean; step?: number; }) => {
    return mmRange.range(aTime, bTime).by(by)
}

const mmRangeByArray = (aTime: DateMoment, bTime: DateMoment, by: unitOfTime.Diff, options?: { excludeEnd?: boolean; step?: number; }) => {
    return Array.from(mmRange.range(aTime, bTime).by(by))
}

export {
    mmRange,
    mmRangeOnly,
    mmRangeBy,
    mmRangeByArray
}


