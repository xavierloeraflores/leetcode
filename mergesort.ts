function Merge(arrLeft: number[], arrRight: number[]): number[] {
    const sortedArray: number[] = [];
    while (arrLeft.length > 0 || arrRight.length > 0) {
        if (arrLeft.length == 0) {
            const num = arrRight.shift() || 0;
            sortedArray.push(num);
        } else if (arrRight.length == 0) {
            const num = arrLeft.shift() || 0;
            sortedArray.push(num);
        } else {
            if (arrLeft[0] < arrRight[0]) {
                const num = arrLeft.shift() || 0;
                sortedArray.push(num);
            } else {
                const num = arrRight.shift() || 0;
                sortedArray.push(num);
            }
        }
    }
    return sortedArray;
}

function MergeSort(arr: number[]): number[] {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = MergeSort(arr.slice(0, mid));
    const right = MergeSort(arr.slice(mid));

    return Merge(left, right);
}

const testMerge = () => {
    const arr1 = [1, 3, 5];
    const arr2 = [2, 4, 6];
    console.log(Merge(arr1, arr2)); // [1, 2, 3, 4, 5, 6]
};

testMerge();

const testMergeSort = () => {
    const testArr = [5, 3, 8, 4, 2, 7, 1, 6];
    console.log(MergeSort(testArr)); // [1, 2, 3, 4, 5, 6, 7, 8]
};

testMergeSort();
