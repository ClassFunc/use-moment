import momentTz from "moment-timezone";
import moment from "moment";

type DateMomentString = Date | string | moment.Moment | moment.MomentInput;

const mmByZone = (time: DateMomentString, zone: string) => {
    return momentTz.tz(time, zone);
};

const mmGuestZone = () => {
    return momentTz.tz.guess();
};

const mmGTM = (timezone?: string) => {
    let result;
    const tz = timezone
        ? +moment.tz(timezone).format("ZZ") / 100
        : +moment().format("ZZ") / 100;
    const isInt = Number.isInteger(tz);
    if (!isInt) {
        result = `${`${tz}`.replace(".", ":")}0`;
        result = ["-", "+"].includes(`${result}`.charAt(0))
            ? `${result}`
            : `+${result}`;
    } else {
        result = ["-", "+"].includes(`${tz}`.charAt(0)) ? `${tz}` : `+${tz}`;
    }
    return `GTM${result}`;
};

export {mmByZone, mmGuestZone, mmGTM};
