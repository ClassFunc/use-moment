import moment from "moment";
import {DateString} from "../../common/typeExportTs";

const mmIsSame = (aTime: DateString, bTime: DateString) => {
    return moment(aTime).isSame(bTime)
}

const mmIsBefore = (aTime: DateString, bTime: DateString) => {
    return moment(aTime).isBefore(bTime)
}

const mmIsSameOrBefore = (aTime: DateString, bTime: DateString) => {
    return moment(aTime).isSameOrBefore(bTime)
}

const mmIsAfter = (aTime: DateString, bTime: DateString) => {
    return moment(aTime).isAfter(bTime)
}

const mmIsSameOrAfter = (aTime: DateString, bTime: DateString) => {
    return moment(aTime).isAfter(bTime)
}

const mmIsSameDate = (aTime: DateString, bTime: DateString) => {
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