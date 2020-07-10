export const getLanguageFromLocalStorage = (key = 'lang') => {
    return localStorage.getItem(key)
}


export const setLanguageToLocalStorage = (lang, key = 'lang') => {
    localStorage.setItem(key, lang)
    return lang
}

export const getMonthByNumber = num => {
    const months = [
        'january',
        'february',
        'march',
        'april',
        'may',
        'june',
        'jule',
        'august',
        'september',
        'october',
        'november',
        'december',
    ]
    if(!months[num-1]) throw new Error('Invalid month number')
    return months[num-1]
}


export const getWeekDayByNumber = (num, short = false) => {
    const weeks = {
        0: {
            name: 'sunday',
            short: 'sun'
        },
        1: {
            name: 'monday',
            short: 'mon'

        },
        2: {
            name: 'tuesday',
            short: 'tue'

        },
        3: {
            name: 'wednesday',
            short: 'wen'

        },
        4: {
            name: 'thursday',
            short: 'thr'

        },
        5: {
            name: 'friday',
            short: 'fri'
        },
        6: {
            name: 'saturday',
            short: 'sat'
        },
    }
    if(!weeks[num]) throw new Error('Invalid week number')
    return short ? weeks[num].short : weeks[num].name
}

