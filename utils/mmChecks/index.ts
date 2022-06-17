import moment from "moment";

type Props = {
    _aTime: Date,
    _bTime: Date,
}

const mmIsSame = ({_aTime, _bTime}: Props) => {
    return moment(_aTime).isSame(_bTime)
}

const mmIsBefore = ({_aTime, _bTime}: Props) => {
    return moment(_aTime).isBefore(_bTime)
}

const mmIsSameOrBefore = ({_aTime, _bTime}: Props) => {
    return moment(_aTime).isSameOrBefore(_bTime)
}

const mmIsAfter = ({_aTime, _bTime}: Props) => {
    return moment(_aTime).isAfter(_bTime)
}

const mmIsSameOrAfter = ({_aTime, _bTime}: Props) => {
    return moment(_aTime).isAfter(_bTime)
}


export {
    mmIsSame,
    mmIsAfter,
    mmIsBefore,
    mmIsSameOrAfter,
    mmIsSameOrBefore
}