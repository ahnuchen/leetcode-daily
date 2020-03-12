var should = require('should')
var {isValid} = require('./valid-parentheses')


describe('valid-parentheses', function () {
    it(`输入: "()"，输出: true`, function () {
        isValid('()').should.be.exactly(true)
    })
    it(`输入()[]{}， 输出true`, function () {
        isValid('()[]{}').should.be.exactly(true)
    })

    it('输入(]，输出false', function () {
        isValid('(]').should.be.exactly(false)
    })
    it('输入([)]，输出false', function () {
        isValid('([)]').should.be.exactly(false)
    })
    it('输入"{[]}，输出false', function () {
        isValid('"{[]}').should.be.exactly(false)
    })
})
