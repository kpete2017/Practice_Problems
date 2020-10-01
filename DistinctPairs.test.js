const distinctPairs = require('./DistinctPairs')

const input = [1, 2, 3, 6, 7, 8, 9, 1];
const target = 10;
const output = 3

test("Checks if two pairs of an array equals a target value", () => {
    expect(distinctPairs(input, target)).toStrictEqual(output)
})

const input2 = [3, 5, 1, 2, 6]
const target2 = 8;
const output2 = 2

test("Checks if two pairs of an array equals a target value", () => {
    expect(distinctPairs(input2, target2)).toStrictEqual(output2)
})