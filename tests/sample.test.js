const {ok} = require('assert')

describe('Example Passing Test', () => {
    it('must pass', () => {
        ok(true)
    })
})

describe('Example of a false passing test', () => {
    it('must pass with false', () => {
        ok (false === false)
    })
})

describe('Force failed in teste run', () => {
    it('no pass', () => {
        ok(false)
    })
})