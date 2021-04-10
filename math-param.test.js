const {testScheduler} = require ('jest')
const {boolean} = require ('./boolean')

test.each ([3,5,7,9]){
    '%2', (%2, expected)=>{
        expect(boolean(true, false)).toBe (expected)
    }
}