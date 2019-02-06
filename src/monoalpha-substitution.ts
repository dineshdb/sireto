export const letters = "abcdefghijklmnopqrstuvwxyz"

export function apply(input:string, key:string, letters: string) {
    return input.toLowerCase().split("")
        .map(c => letters.indexOf(c) != -1 ? key[letters.indexOf(c)] : c)
        .join("")
}
export function encode(msg: string, key: string) {
    return apply(msg.toLowerCase(), key, letters)
}

export function decode(msg: string, key: string) {
    return apply(msg.toLowerCase(), letters, key)
}