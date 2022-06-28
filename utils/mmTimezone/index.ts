import momentTz from 'moment-timezone'
import {DateMomentString} from "../../common/typeExportTs";

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
