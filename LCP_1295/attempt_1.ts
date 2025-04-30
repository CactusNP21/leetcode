// find out solution with string and split and len, but that is the worst solution
// so I copy solution with log10
// btw digit is finger on latin, and log10 aka natural log is mostly used because of that
function findNumbers(nums: number[]): number {
    let evenDigitCount = 0;

    for (let num of nums) {
        // Compute the number of digits in the num
        // @ts-ignore
        let digitCount = Math.floor(Math.log10(num)) + 1;
        if (digitCount % 2 == 0)
            evenDigitCount++;
    }

    return evenDigitCount;
};
