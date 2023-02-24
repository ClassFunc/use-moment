import moment from "moment";

type DateMomentString = Date | string | moment.Moment | moment.MomentInput;

const mmToDate = (aTime: DateMomentString) => {
    return moment(aTime).toDate();
};

const mmAdd = (
    aTime: DateMomentString,
    amount: moment.DurationInputArg1,
    unit: moment.DurationInputArg2
) => {
    return moment(aTime).add(amount, unit);
};

const mmSubtract = (
    aTime: DateMomentString,
    amount: moment.DurationInputArg1,
    unit: moment.DurationInputArg2
) => {
    return moment(aTime).subtract(amount, unit);
};

const mmDiff = (aTime: DateMomentString, bTime: DateMomentString) => {
    return moment(aTime).diff(bTime);
};

const mmSet = (
    aTime: DateMomentString,
    objectLiteral: moment.MomentSetObject
) => {
    return moment(aTime).set(objectLiteral);
};

const mmDefault = (aTime: DateMomentString, valueOf: boolean = false) => {
    if (valueOf) return moment(aTime).valueOf();
    return moment(aTime);
};

const mmDefaultUTC = (aTime: DateMomentString, valueOf: boolean = false) => {
    if (valueOf) return moment(aTime).utc().valueOf();
    return moment(aTime).utc();
};

const mmDuration = (
    aTime: DateMomentString,
    bTime: DateMomentString,
    divisor: number
) => {
    return (moment(aTime).valueOf() - moment(bTime).valueOf()) / divisor;
};

const mmDurationUTC = (
    aTime: DateMomentString,
    bTime: DateMomentString,
    divisor: number
) => {
    return (
        (moment(aTime).utc().valueOf() - moment(bTime).utc().valueOf()) / divisor
    );
};

export {
    mmToDate,
    mmSet,
    mmDiff,
    mmAdd,
    mmSubtract,
    mmDefault,
    mmDefaultUTC,
    mmDuration,
    mmDurationUTC,
};
