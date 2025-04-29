// can`t resolve, but I guess two different approach sliding window and max element indexes
// should check solution to understand it
function countSubarrays(nums: number[], k: number): number {
    const len = nums.length;
    const maxNum = 3;
    let frequency = 0;
    let count = 0;
    for (let i = 0, j = 0; i < len; i++) {
        frequency -= nums[i] === maxNum ? -1 : 0;
        while (frequency < k) {
            frequency += nums[j] === maxNum ? 0 : 1;
            if (frequency < k) j += 1;
        }
        // at this point frequency is k
        count += len - j;
    }
    return count;
}

console.log(countSubarrays([1,3,2,3,3], 2))
