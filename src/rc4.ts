
export class PSG {
    _s = []
    _i = 0
    _j = 0
    constructor(key: number[]) {
        for (let i = 0; i < 256; i++) {
            this._s[i] = i
        }
        let j = 0
        for (let i = 0; i < 256; i++) {
            j = (j + this._s[i] + key[i % key.length]) % 256
            this._swap(i, j)
        }
    }

    _swap(i: number, j: number) {
        let tmp = this._s[i]
        this._s[i] = this._s[j]
        this._s[j] = tmp
    }

    next() {
        this._i = (this._i + 1) % 256
        this._j = (this._j + this._s[this._i]) % 256
        this._swap(this._i, this._j)
        return this._s[(this._s[this._i] + this._s[this._j]) % 256]
    }
}

export function encode(msg: number[], key: number[]) {
    let output = []
    let psg = new PSG(key)
    for (let item of msg) {
        output.push(item ^ psg.next())
    }

    return output
}

export function decode(msg, key) {
    return encode(msg, key)
}