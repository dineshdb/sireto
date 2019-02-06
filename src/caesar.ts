const letters = "abcdefghijklmnopqrstuvwxyz"

export function encode(msg: string, key: number) {
    return msg.toLowerCase()
        .split("")
        .map(c => letters.indexOf(c) != -1 ? letters[(letters.indexOf(c) + key) % letters.length] : c)
        .join("")
}

export function decode(msg: string, key: number) {
    return encode(msg, letters.length - key % letters.length)
}
