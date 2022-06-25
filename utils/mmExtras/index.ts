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

const mmEndOfDay = (aTime: DateString) => {
    return moment(aTime).endOf("day")
}

const mmEndOfWeeks = (aTime: DateString) => {
    return moment(aTime).endOf("weeks")
}

const mmEndOfIsoWeeks = (aTime: DateString) => {
    return moment(aTime).endOf("isoWeeks")
}

const mmEndOfIsoMonth = (aTime: DateString) => {
    return moment(aTime).endOf("months")
}

export {
    mmStartOfDay,
    mmStartOfIsoMonth,
    mmStartOfIsoWeeks,
    mmStartOfWeeks
}