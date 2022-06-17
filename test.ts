import {mmIsAfter, mmIsSame} from "./utils/mmChecks"

// const {mmIsSame} = mmChecks

let _now = new Date()
let _now2 = new Date()

console.log(mmIsSame({_aTime: _now, _bTime: _now2}))
console.log(mmIsAfter({_aTime: _now, _bTime: _now2}))


