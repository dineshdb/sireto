import { expect } from "chai"
import { encode, decode } from "../src/caesar"

let text = "hello world i am coming in 5000 seconds."

describe("Caesar", function () {
  it("Should return same on keys multiple of 26 and 0.", function () {
    expect(encode(text, 0)).to.equal(text)
    expect(encode(text, 26)).to.equal(text)
    expect(encode(text, 52)).to.equal(text)
  })
  it("Should return orginal value after encoding and decoding phase.", function () {
    expect(decode(encode(text, 22), 22)).to.equal(text)
    expect(decode(encode(text, 62), 62)).to.equal(text)
  });

  it("Should not transform any character it does not understand including numbers", function(){
    expect(encode("1234 ;./?", 2)).to.equal("1234 ;./?")
    expect(decode("1234 ;./?", 2)).to.equal("1234 ;./?")
  })

  it("Should confirm to the output of other such programs.", function () {
    expect(encode("hello world 1234", 2)).to.equal("jgnnq yqtnf 1234")
    expect(decode("jgnnq yqtnf 1234", 2)).to.equal("hello world 1234")
  });
});

