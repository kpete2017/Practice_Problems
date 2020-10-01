

// O(n^2)
const twoSumBrute = (nums, target) => {
    let answer = [];
    for(let i = 0; i < nums.length; i++) {
        for(let j = 0; j < nums.length; j++) {
            if(nums[j] + nums[i] === target && i != j) {
                answer.push([[nums[i], nums[j]]])
            }
        }
    }
    return answer;
}

//Better
// O(n)
const twoSumTwoPass = (nums, target) => {
    let answer = [];
    let map = {};

    for(let i = 0; i < nums.length; i++) {
        map[nums[i]] = nums[i]
    }

    for(let i = 0; i < nums.length; i++) {
        if(map[nums[i] - target]) {
            answer.push(map[nums[i] - target], nums[i])
        }
    }

    return answer;

}

// O(n)
const twoSumOnePass = (nums, target) => {
    let answer = [];
    let map = {};
    for(let i = 0; i < nums.length; i++) {
        if(map[target - nums[i]]) {
            answer.push(map[nums[i] - target], nums[i])
        }
        map[nums[i]] = nums[i]
    }
    return map;
}


// O(n log n)


const twoSum = (nums, target) => {
    let answer = [];
    nums = nums.sort();

    for(let i = 0; i < nums.length; i++) {
        let lo = i;
        let hi = nums.length - 1;
        while(lo < hi) {
            let sum = nums[lo] + nums[hi];
            if(sum === target) {
                answer.push([nums[lo], nums[hi]])
                while(nums[lo] === nums[lo + 1]) lo++;
                while(nums[hi] === nums[hi - 1]) hi--;
                lo++;
                hi--;
            }
            else if(sum < target) {
                lo++;
            } else {
                hi--
            }
        }
    }

    return answer;
}

module.exports = twoSum