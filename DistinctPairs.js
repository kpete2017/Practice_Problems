// const distinctPairs = (nums, target) => {
//     if(nums.length < 2) return 0;
//     let results = 0;
//     nums = nums.sort();
//     let uniqueMap = {};

//     for(let i = 0; i < nums.length; i++) {
//         // [1, 1, 2, 3, 6, 7, 8, 9];
//         let lo = i;
//         let hi = nums.length - 1;
//         if(nums[i] === nums[i + 1]) continue;
//         while(lo < hi) {
//             let sum = nums[lo] + nums[hi]
//             if(sum === target && !uniqueMap[results[i]]) {
//                 results++;
//                 uniqueMap[results[i]] = true
//                 lo++;
//                 hi--;
//                 while (lo < hi && nums[lo] === nums[lo + 1]) lo++;
//                 while (lo < hi && nums[hi] === nums[hi - 1]) hi--;
//             }
//             else if(sum < target) lo++;
//             else hi--;
//         }
//     }
//     return results
// }

// O(N)
const distinctPairs = (nums, target) => {
    let map = {};
    let results = 0;
    nums = nums.sort();
    for(let i = 0; i < nums.length; i++) {
        if(map[target - nums[i]]) {
            results++;
        }
        map[nums[i]] = nums[i];
    }
    return results;
}


module.exports = distinctPairs;