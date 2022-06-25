import moment from "moment";
import {DateString} from "../../common/typeExportTs";

const mmToDate = (aTime: DateString) => {
    return moment(aTime).toDate()
}

const mmCalculatorsAdd = (aTime: DateString, amount: moment.DurationInputArg1, unit: moment.DurationInputArg2) => {
    return moment(aTime).add(amount, unit).format()
}

const mmCalculatorsSubtract = (aTime: DateString, amount: moment.DurationInputArg1, unit: moment.DurationInputArg2) => {
    return moment(aTime).subtract(amount, unit).format()
}

export {
    mmToDate,
    mmCalculatorsAdd,
    mmCalculatorsSubtract
}
