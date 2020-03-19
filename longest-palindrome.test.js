require('should')
var {longestPalindrome} = require("./longest-palindrome");

describe("最长回文串",function () {

    it("abccccdd", function () {
       longestPalindrome("abccccdd").should.be.exactly(7)
    })

    it("abcccddsfdsa", function () {
       longestPalindrome("abcccddsfdsa").should.be.exactly(9)
    })
})