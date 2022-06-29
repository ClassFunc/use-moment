import moment from "moment";

type DateMomentString = Date | string | moment.Moment
const mmToDate = (aTime: DateMomentString) => {
    return moment(aTime).toDate()
}

const mmAdd = (aTime: DateMomentString, amount: moment.DurationInputArg1, unit: moment.DurationInputArg2) => {
    return moment(aTime).add(amount, unit)
}

const mmSubtract = (aTime: DateMomentString, amount: moment.DurationInputArg1, unit: moment.DurationInputArg2) => {
    return moment(aTime).subtract(amount, unit)
}

const mmDiff = (aTime: DateMomentString, bTime: DateMomentString) => {
    return moment(aTime).diff(bTime)
}

const mmSet = (aTime: DateMomentString, objectLiteral: moment.MomentSetObject) => {
    return moment(aTime).set(objectLiteral)
}

export {
    mmToDate,
    mmSet,
    mmDiff,
    mmAdd,
    mmSubtract
}
