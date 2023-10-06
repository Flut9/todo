export const getUid = (): string => {
    let uid = ''
    for (let i = 0; i < 8; i++) {
        uid += Math.floor(Math.random() * 10)
    }
    return uid
}