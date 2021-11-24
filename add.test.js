const add = require('./add')

test('add 1 + 3 must equal 4', () => {
    expect(add(1,3)).toBe(4)
})