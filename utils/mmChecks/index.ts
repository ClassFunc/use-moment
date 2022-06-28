import moment from "moment";
import {DateMomentString} from "../../common/typeExportTs";

const mmIsSame = (aTime: DateMomentString, bTime: DateMomentString) => {
    return moment(aTime).isSame(bTime)
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
    mmIsSameDate
}