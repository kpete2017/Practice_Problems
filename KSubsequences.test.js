const ksub = require('./KSubsequences')

const k = 3;
const array = [1,2,3,4,1]
const output = 4;

test("Whether s % k === 0", () => {
    expect(ksub(k, array)).toStrictEqual(output)
})