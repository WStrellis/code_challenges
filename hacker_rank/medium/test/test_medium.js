const sherlockAndAnagrams = require("../sherlock-anagrams")

describe("Tests for Sherlock-Anagrams", function() {
    it("should return 4", function() {
        expect(sherlockAndAnagrams("abba")).to.eq(4)
    })

    it("should return 0", function() {
        expect(sherlockAndAnagrams("abcd")).to.eq(0)
    })

    it("should return 5", function() {
        expect(sherlockAndAnagrams("cdcd")).to.eq(5)
    })

    it("should return 3", function() {
        expect(sherlockAndAnagrams("ifailuhkqq")).to.eq(3)
    })

    it("should return 10", function() {
        expect(sherlockAndAnagrams("kkkk")).to.eq(10)
    })
})
