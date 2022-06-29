import dayjs, {ConfigType, OpUnitType, QUnitType} from "dayjs";

const djsFormat = (aTime: ConfigType, format: string) => {
    return dayjs(aTime).format(format)
}

const djsFromNow = (aTime: ConfigType, withoutSuffix?: boolean) => {
    return dayjs(aTime).fromNow(withoutSuffix)
}

const djsToNow = (aTime: ConfigType, withoutSuffix?: boolean) => {
    return dayjs(aTime).toNow(withoutSuffix)
}

const djsFromAtTime = (aTime: ConfigType, compared: ConfigType, withoutSuffix?: boolean) => {
    return dayjs(aTime).from(compared, withoutSuffix)
}

const djsToAtTime = (aTime: ConfigType, compared: ConfigType, withoutSuffix?: boolean) => {
    return dayjs(aTime).to(compared, withoutSuffix)
}

const djsCalendar = (referenceTime?: ConfigType, formats?: object) => {
    return dayjs().calendar(referenceTime, formats)
}

const djsDiff = (aTime: ConfigType, bTime: ConfigType, unit?: QUnitType | OpUnitType, float?: boolean) => {
    return dayjs(aTime).diff(bTime, unit, float)
}

export {
    djsFormat,
    djsFromNow,
    djsFromAtTime,
    djsToAtTime,
    djsCalendar,
    djsToNow,
    djsDiff
}