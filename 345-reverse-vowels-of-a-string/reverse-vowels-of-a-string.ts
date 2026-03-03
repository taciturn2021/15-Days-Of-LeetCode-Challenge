function reverseVowels(s: string): string {
    let list1 = s.split("");
    let start = 0;
    let end = list1.length - 1;
    let vowels = ['a', 'e', 'i', 'o','u' ]
    while (start < end) {
        if (!vowels.includes(list1[start].toLowerCase())) {
            start++;
        }
        if (!vowels.includes(list1[end].toLowerCase())) {
            end--;
        }
        if (vowels.includes(list1[end].toLowerCase()) && vowels.includes(list1[start].toLowerCase())) {
            let temp = list1[start];
            list1[start] = list1[end];
            list1[end] = temp;
            start++;
            end--;
        }
    }

    return list1.join("");
};