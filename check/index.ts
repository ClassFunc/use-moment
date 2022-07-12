import moment from "moment";

type DateMomentString = Date | string | moment.Moment

const mmIsSame = (aTime: DateMomentString, bTime: DateMomentString) => {
    return moment(aTime).isSame(bTime)
}

const mmIsBetween = (aTime: DateMomentString, bTime: DateMomentString, cTime: DateMomentString) => {
    return moment(aTime).isBetween(bTime, cTime)
}

const mmIsBefore = (aTime: DateMomentString, bTime: DateMomentString) => {
    return moment(aTime).isBefore(bTime)
}

const mmIsSameOrBefore = (aTime: DateMomentString, bTime: DateMomentString) => {
    return moment(aTime).isSameOrBefore(bTime)
}

const mmIsAfter = (aTime: DateMomentString, bTime: DateMomentString) => {
    return moment(aTime).isAfter(bTime)
}

const mmIsSameOrAfter = (aTime: DateMomentString, bTime: DateMomentString) => {
    return moment(aTime).isAfter(bTime)
}

const mmIsSameDate = (aTime: DateMomentString, bTime: DateMomentString) => {
    return moment(aTime).isSame(bTime, 'date')
}

export {
    mmIsSame,
    mmIsAfter,
    mmIsBefore,
    mmIsSameOrAfter,
    mmIsSameOrBefore,
    mmIsSameDate,
    mmIsBetween
}