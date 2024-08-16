const bubbleSort = (arr: number[]): number[] => {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
};
const optimizedBubbleSort = (arr: number[]): number[] => {
    for (let i = 0; i < arr.length - 1; i++) {
        let sorted = true; // Flag to check if the array is already sorted
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                sorted = false; // If a swap is made, the array is not sorted
            }
        }
        if (sorted) return arr; // If the array is already sorted, return it
    }
    return arr;
};

const testArr = [5, 3, 8, 4, 2];
console.log(optimizedBubbleSort(testArr)); // [2, 3, 4, 5, 8]
console.log(bubbleSort(testArr)); // [2, 3, 4, 5, 8]
