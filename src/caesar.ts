const letters = "abcdefghijklmnopqrstuvwxyz"

export function encodeWord(word: string, key: number) {
    return word.split("")
        .map(c => letters.indexOf(c) != -1 ? letters[(letters.indexOf(c) + key) % letters.length] : c)
//        .map(c => c[0].match(/[a-z]/) ? letters[(c.charCodeAt(0) + key - 97) % letters.length] : c[0])
        .join("")

}
export function encode(msg: string, key: number) {
    return msg.toLowerCase()
        .split(" ")
        .map(word => encodeWord(word, key))
        .join(" ")
}

export function decode(msg: string, key: number) {
    return encode(msg, letters.length - key % letters.length)
}
