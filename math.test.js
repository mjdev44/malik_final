//The Operation should return true when the number is a prime
//number and false when it’s not

const {boolean} = require ('./boolean')

test('2',()=>{
    expect(boolean(2)).toBe(true)
})
test.skip('4',()=>{
    expect(boolean(4)).toBe(false)
})

