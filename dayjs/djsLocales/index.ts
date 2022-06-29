import dayjs from "dayjs";

const djsSetLocale = (locale: string) => {
    if (!locale)
        locale = "ja"

    import(`dayjs/locale/${locale}.js`).then(() => {
        dayjs.locale(locale)
    })
}

export {
    djsSetLocale
}