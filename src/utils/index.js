export const dateConverter = (num) => {
    const date = new Date(num * 1000);
    const day = String(date.getUTCDate()).padStart(2, '0');
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    return `${day}-${month}`;
};

export const hourConverter = (time) => {
    return time.slice(11)
};

export const filteredList = (list) => {
    const seenDates = new Set();
    return list.filter(item => {
        const date = dateConverter(item.dt);
        if (seenDates.has(date)) {
            return false;
        }
        seenDates.add(date);
        return true;
    });
}

export const filterByCurrentDate = (current, dataArray) => {
    const currentDayDt = dateConverter(current.dt)
    return dataArray.filter((val) => dateConverter(val.dt).includes(currentDayDt))
};

export const tempConverter = (temp = 273, unit = 'Celsius') => {
    const cel = Math.round(temp - 273) || 0
    return unit === 'Celsius' ? `${cel}°C` : `${Math.round(cel * (9 / 5) + 32)}°F
`
}
export const generateIcon = (icon = '') => {
    return `https://openweathermap.org/img/wn/${icon}@2x.png`
}
export const currentChecker = (current = '', day = '') => {
    return dateConverter(current).includes(day)
}

