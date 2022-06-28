import moment from "moment";
import {DateMomentString} from "../../common/typeExportTs";

const mmToDate = (aTime: DateMomentString) => {
    return moment(aTime).toDate()
}

const mmCalculatorsAdd = (aTime: DateMomentString, amount: moment.DurationInputArg1, unit: moment.DurationInputArg2) => {
    return moment(aTime).add(amount, unit)
}

const mmCalculatorsSubtract = (aTime: DateMomentString, amount: moment.DurationInputArg1, unit: moment.DurationInputArg2) => {
    return moment(aTime).subtract(amount, unit)
}

const mmCalculatorsDiff = (aTime: DateMomentString, bTime: DateMomentString) => {
    return moment(aTime).diff(bTime)
}

const mmCalculatorsSet = (aTime: DateMomentString, objectLiteral: moment.MomentSetObject) => {
    return moment(aTime).set(objectLiteral)
}

export {
    mmToDate,
    mmCalculatorsSet,
    mmCalculatorsDiff,
    mmCalculatorsAdd,
    mmCalculatorsSubtract
}
