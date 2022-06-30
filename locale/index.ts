import moment from "moment"

const mmSetLocale = (locale: string) => {
    if (!locale)
        locale = 'ja'

    let _locale = locale.split("-")[0]
    if (_locale === "en")
        _locale = "en-gb"

    import(`moment/locale/${_locale}.js`).then(() => {
        moment.locale(_locale)
    }).catch(e => console.log(e.toString()))
}

export {
    mmSetLocale
}