import { expect } from "chai"
import { encode, decode, PSG } from "../src/rc4"

function paddingFunction(targetLength: number, padString) {
    return function (str: string) {
        let count = targetLength - str.length
        let target = str
        for (let i = 0; i < count; i++) {
            target = padString + str
        }
        return target
    }
}
function format(msg: number[]) {
    return msg.map(c => c.toString(16)).map(paddingFunction(2, "0")).join("").toUpperCase()
}

describe("RC4", function () {
    let key1 = "Key".split("").map(c => c.charCodeAt(0))
    let text1 = "Plaintext".split("").map(c => c.charCodeAt(0))
    let encoded1 = "BBF316E8D940AF0AD3"

    let key2 = "Wiki".split("").map(c => c.charCodeAt(0))
    let text2 = "pedia".split("").map(c => c.charCodeAt(0))
    let encoded2 = "1021BF0420"

    it("Should generate proper keystream.", function () {
        let psg = new PSG("Key".split("").map(c => c.charCodeAt(0)))
        expect(psg.next().toString(16)).to.equal("eb")
        expect(psg.next().toString(16)).to.equal("9f")

        let psg2 = new PSG("Wiki".split("").map(c => c.charCodeAt(0)))
        expect(psg2.next().toString(16)).to.equal("60")
        expect(psg2.next().toString(16)).to.equal("44")

    })
    it("Should encode properly.", function () {
        expect(format(encode(text1, key1))).to.equal(encoded1)
        expect(format(encode(text2, key2))).to.equal(encoded2)
    })
    it("Should encode and decode properly.", function () {
        expect(decode(encode(text1, key1), key1).join("")).to.equal(text1.join(""))
        expect(decode(encode(text2, key2), key2).join("")).to.equal(text2.join(""))
    })
});
