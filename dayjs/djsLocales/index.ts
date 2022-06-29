import dayjs from "dayjs";

const djsSetLocale = (locale: string) => {
    if (!locale)
        locale = "ja"

    import(`dayjs/locale/${locale}`).then(() => {
        dayjs.locale(locale)
    })
}

export {
    djsSetLocale
}