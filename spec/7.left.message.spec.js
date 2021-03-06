const { expect } = require('chai')
const { create } = require('../lib/sequence')
const { quiet } = require ('./quiet')

describe('left message', ()=>{

    it('works', ()=>{
        let input = {
            config: {
                padding: 2,
                margin: 4
            },
            actors: [
                { name:'superman' },
                { name:'batman' }
            ],
            steps: [
                { description:'batman -> superman : ok... so you can fly?'}
            ]
        }
        let expected = quiet(`
            +------------+          +----------+
            |  superman  |          |  batman  |
            +------------+          +----------+
            |                       |
            |  ok... so you can fly?|
            |<----------------------|
        `)
        let actual = quiet(create(input))

        expect(actual).to.deep.equal(expected)
    })
})
