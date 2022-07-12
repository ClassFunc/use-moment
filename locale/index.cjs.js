"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
      __defProp(target, name, {get: all[name], enumerable: true});
};
var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))
            if (!__hasOwnProp.call(to, key) && key !== except)
                __defProp(to, key, {
                    get: () => from[key],
                    enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
                });
    }
    return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
    value: mod,
    enumerable: true
}) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", {value: true}), mod);
var locale_exports = {};
__export(locale_exports, {
    mmSetLocale: () => mmSetLocale
});
module.exports = __toCommonJS(locale_exports);
var import_moment = __toESM(require("moment"));
const mmSetLocale = (locale) => {
    if (!locale)
        locale = "ja";
    let _locale = locale.split("-")[0];
  if (_locale === "en")
    _locale = "en-gb";
  import(`moment/locale/${_locale}.js`).then(() => {
    import_moment.default.locale(_locale);
  }).catch((e) => console.log(e.toString()));
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  mmSetLocale
});
