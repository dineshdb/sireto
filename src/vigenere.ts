export const letters = "abcdefghijklmnopqrstuvwxyz"

export function apply(input: string, key: string, fn: any) {
    input = input.toLowerCase()
    let result = []
    for (let i = 0; i < input.length; i++) {
        let index = letters.indexOf(input[i])
        let k = letters.indexOf(key[i % key.length])
        let target = letters[(letters.length + fn(index, k)) % letters.length]
        result.push(index === -1 ? input[i] : target)
    }
    return result.join("")
}
export function encode(msg: string, key: string) {
    return apply(msg.toLowerCase(), key, (i: number, j: number) => i + j)
}

export function decode(input: string, key: string) {
    return apply(input.toLowerCase(), key, (i: number, j: number) => i - j)
}