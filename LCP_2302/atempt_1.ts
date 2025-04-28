// technically this solution is working with N(O^2) time complexity
// should learn sliding windows

function countSubarrays(nums: number[], k: number): number {
    let count = 0;
    for (let pointer1 = 0; pointer1 < nums.length; pointer1++) {
        let prefixSum = 0;
        let subLen = 1;
        if (nums[pointer1] < k) count += 1;

        prefixSum += nums[pointer1];

        for (let pointer2 = pointer1 + 1; pointer2 < nums.length; pointer2++) {
            prefixSum += nums[pointer2];
            subLen += 1;
            if ((prefixSum * subLen) < k) {
                count += 1
            } else {
                break
            }
        }
    }
    return count;
}

console.log(countSubarrays([1,1,1], 5))
