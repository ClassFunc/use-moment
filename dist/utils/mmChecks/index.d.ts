import {DateMomentString} from "../../common/typeExportTs";

declare const mmIsSame: (aTime: DateMomentString, bTime: DateMomentString) => boolean;
declare const mmIsBefore: (aTime: DateMomentString, bTime: DateMomentString) => boolean;
declare const mmIsSameOrBefore: (aTime: DateMomentString, bTime: DateMomentString) => boolean;
declare const mmIsAfter: (aTime: DateMomentString, bTime: DateMomentString) => boolean;
declare const mmIsSameOrAfter: (aTime: DateMomentString, bTime: DateMomentString) => boolean;
declare const mmIsSameDate: (aTime: DateMomentString, bTime: DateMomentString) => boolean;
export {mmIsSame, mmIsAfter, mmIsBefore, mmIsSameOrAfter, mmIsSameOrBefore, mmIsSameDate};
