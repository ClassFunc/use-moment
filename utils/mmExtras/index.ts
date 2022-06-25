import moment from "moment"
import {DateString} from "../../common/typeExportTs";

const mmStartOfDay = (aTime: DateString) => {
    return moment(aTime).startOf("day")
}

const mmStartOfWeeks = (aTime: DateString) => {
    return moment(aTime).startOf("weeks")
}

const mmStartOfIsoWeeks = (aTime: DateString) => {
    return moment(aTime).startOf("isoWeeks")
}

const mmStartOfIsoMonth = (aTime: DateString) => {
    return moment(aTime).startOf("months")
}

export {
    mmStartOfDay,
    mmStartOfIsoMonth,
    mmStartOfIsoWeeks,
    mmStartOfWeeks
}