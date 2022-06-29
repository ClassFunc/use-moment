import momentTz from 'moment-timezone';
import moment from "moment";

type DateMomentString = Date | string | moment.Moment

const mmByZone = (time: DateMomentString, zone: string) => {
    return momentTz.tz(time, zone)
}

const mmGuestZone = () => {
    return momentTz.tz.guess()
}

export {
    mmByZone,
    mmGuestZone
}
