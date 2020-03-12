var should = require('should')
var {gcdOfStrings} = require('./greatest-common-divisor-of-strings.js')

describe('greatest-common-divisor-of-strings', function () {
    it(`输入：str1 = "ABCABC", str2 = "ABC"， 输出："ABC"`, function () {
        gcdOfStrings('ABCABC', 'ABC').should.be.exactly('ABC')
    })
    it(`输入：str1 = "ABABAB", str2 = "ABAB"，输出："AB"`, function () {
        gcdOfStrings('ABABAB', 'ABAB').should.be.exactly('AB')
    })

    it(`输入：str1 = "LEET", str2 = "CODE"，输出：""`, function () {
        gcdOfStrings('LEET', 'CODE').should.be.exactly('')
    })
})
