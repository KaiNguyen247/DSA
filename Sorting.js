class Sorting {
    static selectionSort(array) {
        const n = array.length;

        for (let i = 0; i < n - 1; i++) {
            for (let j = i + 1; j < n; j++) {
                if (array[i] > array[j]) {
                    let temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                }
            }
        }

        return array;
    }

    static selectionSort2(array) {
        const n = array.length;

        for (let i = 0; i < n - 1; i++) {
            let min = i;

            for (let j = i + 1; j < n; j++) {
                if (array[min] > array[j]) {
                    min = j;
                }
            }
            let temp = array[i];
            array[i] = array[min];
            array[min] = temp;
        }

        return array;
    }

    static bubbleSort(array) {
        const n = array.length;

        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                if (array[j] > array[j + 1]) {
                    let temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                }
            }
        }

        return array;
    }
}

const array = [0, 12, 3, 5, 231, 21, 16, 73];
const result = Sorting.selectionSort(array);
const result2 = Sorting.bubbleSort(array);
console.log(result, result2);
