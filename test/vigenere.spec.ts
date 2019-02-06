import { expect } from "chai"
import { encode, decode, letters } from "../src/vigenere"

let key = "relationsrela"
let text = "TOBEORNOTTOBE".toLowerCase()
let encoded = "KSMEHZBBLKSME".toLowerCase()

describe("Polyalphabetic Substitution (Vigenere)", function () {
    it("Should confirm to the encryption of other such programs.", function () {
        expect(encode(text, key)).to.equal(encoded)
    });
    it("Should confirm to the decryption of other such programs.", function () {
        expect(decode(encoded, key)).to.equal(text)
    });

    it("Should return same when plain letters are used in order.", function () {
        expect(encode(text, "a")).to.equal(text)
        expect(decode(encoded, "a")).to.equal(encoded)
    });
});

