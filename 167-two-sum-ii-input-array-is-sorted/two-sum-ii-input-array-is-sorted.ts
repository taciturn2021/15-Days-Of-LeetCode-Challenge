function twoSum(numbers: number[], target: number): number[] {
    let left = 0;
    let right = numbers.length - 1;
    let answer = [];
    while (left < right) {
        if (numbers[left] + numbers[right] === target) {
            answer[0] = left + 1;
            answer[1] = right+ 1;
            break;
        }else if (numbers[left] + numbers[right] >= target) {
            right -= 1;
        }else {
            left += 1;
        }
    }

    return answer;
};