import momentTz from "moment-timezone";
import moment from "moment";

const mmByZone = (time, zone) => {
  return momentTz.tz(time, zone);
};
const mmGuestZone = () => {
  return momentTz.tz.guess();
};
const mmGTM = (timezone) => {
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
export {mmByZone, mmGTM, mmGuestZone};
