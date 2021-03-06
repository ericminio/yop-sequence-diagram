const { expect } = require('chai')
const { create } = require('../../lib/components')
const { quiet } = require ('../quiet')

describe('links', ()=>{

    it('is available', ()=>{
        let input = {
            components: [
                { name:'One', row:0, column:0, width:10, height:4 },
                { name:'Two', row:6, column:10, width:10, height:4 },
                { name:'Three', row:6, column:25, width:10, height:3 }
            ],
            links: [
                { origin:'One', path: [
                    { row:4, column:2 }, { row:7, column:2 }, { row:7, column:9 }
                ]},
                { origin:'Two', path: [
                    { row:1, column:10 }, { row:1, column:14 }
                ]}
            ]
        }
        let expected = quiet(`
            +--------+ 
            | One    |
            |        |     
            +--------+
              |
              |
              |       +--------+     +--------+
              +-------| Two    |-----| Three  |
                      |        |     +--------+
                      +--------+
        `)
        let actual = quiet(create(input))

        expect(actual).to.deep.equal(expected)
    })
})
