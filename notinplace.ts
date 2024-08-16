function reverseArrayOutOfPlace(arr: number[]): number[] {
    let newArr: number[] = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }

    return newArr;
}
function testReverseArrayOutOfPlace() {
    let originalArray = [1, 2, 3, 4, 5];
    console.log(originalArray); // [1, 2, 3, 4, 5]
    let reversedArray = reverseArrayOutOfPlace(originalArray);
    console.log(reversedArray); // [5, 4, 3, 2, 1]
}

testReverseArrayOutOfPlace();
