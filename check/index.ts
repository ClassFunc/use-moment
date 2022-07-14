import moment, {unitOfTime} from "moment";

type DateMomentString = Date | string | moment.Moment

const mmIsSame = (aTime: DateMomentString, bTime: DateMomentString, granularity?: unitOfTime.StartOf) => {
    return moment(aTime).isSame(bTime, granularity)
}

const mmIsBetween = (aTime: DateMomentString, bTime: DateMomentString, cTime: DateMomentString, granularity?: unitOfTime.StartOf, inclusivity?: "()" | "[)" | "(]" | "[]") => {
    return moment(aTime).isBetween(bTime, cTime, granularity, inclusivity)
}

const mmIsBefore = (aTime: DateMomentString, bTime: DateMomentString, granularity?: unitOfTime.StartOf) => {
    return moment(aTime).isBefore(bTime, granularity)
}

const mmIsSameOrBefore = (aTime: DateMomentString, bTime: DateMomentString, granularity?: unitOfTime.StartOf) => {
    return moment(aTime).isSameOrBefore(bTime, granularity)
}

const mmIsAfter = (aTime: DateMomentString, bTime: DateMomentString, granularity?: unitOfTime.StartOf) => {
    return moment(aTime).isAfter(bTime, granularity)
}

const mmIsSameOrAfter = (aTime: DateMomentString, bTime: DateMomentString, granularity?: unitOfTime.StartOf) => {
    return moment(aTime).isAfter(bTime, granularity)
}

const mmIsSameDate = (aTime: DateMomentString, bTime: DateMomentString, granularity: unitOfTime.StartOf = "date") => {
    return moment(aTime).isSame(bTime, granularity)
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