var should = require('should')
var {isValid} = require('./valid-parentheses')


describe('valid-parentheses',function () {
    it('input ()',function () {
        isValid('()').should.be.exactly(true)
    })
    it('input ()[]{}',function () {
        isValid('()[]{}').should.be.exactly(true)
    })

    it('input (]',function () {
        isValid('(]').should.be.exactly(false)
    })
    it('input ([)]',function () {
        isValid('([)]').should.be.exactly(false)
    })
    it('input "{[]}',function () {
        isValid('"{[]}').should.be.exactly(false)
    })
})
