//3 <= nums.length <= 100
// -100 <= nums[i] <= 100
function countSubarrays(nums: number[]): number {
    let count = 0;
    for (let middlePointer = 1; middlePointer < nums.length - 1; middlePointer++) {
        const startVal = nums[middlePointer - 1];
        const middleVal = nums[middlePointer];
        const endVal = nums[middlePointer + 1];

        if (startVal + endVal === middleVal / 2) count++;
    }
    console.log(count);
    return count;
}

countSubarrays([1,2,1,4,1]);
countSubarrays([1,1,1]);
