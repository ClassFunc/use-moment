import moment from "moment"

const mmSetLocale = (locale: string) => {
    if (!locale)
        locale = 'ja'

    import(`moment/locale/${locale}`).then(() => {
        moment.locale(locale)
    })
}

export {
    mmSetLocale
}