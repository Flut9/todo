export const setItem = (key: string, data: object | object[]) => {
    localStorage.setItem(key, JSON.stringify(data))
}

export const getItems = (key: string): object[] => {
    const item = localStorage.getItem(key)
    return item ? JSON.parse(item) : []
}