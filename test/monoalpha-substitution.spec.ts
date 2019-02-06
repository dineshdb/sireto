import { expect } from "chai"
import { encode, decode, letters } from "../src/monoalpha-substitution"

let key = "jabzqvswunedgypotlcxkhmifr"
let text = "hello world i am coming in 5000 seconds."
let encoded = "WQDDP MPLDZ U JG BPGUYS UY 5000 CQBPYZC.".toLowerCase()

describe("Monoalpha Substitution", function () {
    it("Should be reversible.", function () {
        expect(text).to.equal(decode(encode(text, key), key))
    })

    it("Should confirm to the encryption of other such programs.", function () {
        expect(encode(text, key)).to.equal(encoded)
    });
    it("Should confirm to the decryption of other such programs.", function () {
        expect(decode(encoded, key)).to.equal(text)
    });

    it("Should return same when plain letters are used in order.", function () {
        expect(encode(text, letters)).to.equal(text)
        expect(decode(encoded, letters)).to.equal(encoded)
    });
});

