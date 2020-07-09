export const getLanguageFromLocalStorage = (key = 'lang') => {
    return localStorage.getItem(key)
}


export const setLanguageToLocalStorage = (lang, key = 'lang') => {
    localStorage.setItem(key, lang)
    return lang
}
