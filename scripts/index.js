const insertionSort = (arr) => {
    for (var i = 1; i < arr.length; i++) {
        var valueToInsert;
        var holePosition;
        if (arr[i] < arr[i - 1]) {
            valueToInsert = arr[i];
            holePosition = i;
        }

        while (holePosition > 0 && arr[holePosition-1] > valueToInsert) {
            arr[holePosition] = arr[holePosition - 1];
            holePosition = holePosition - 1;
        }
     
        arr[holePosition] = valueToInsert
    }

    return arr;
}

const unsortedList = [2, 7, 12, 54, 61, 5, 17];

const resultDiv = document.getElementById('result');

const r1 = document.createElement('h2');
r1.innerHTML = `List before sorting: (${unsortedList})`;

const sortedList = insertionSort(unsortedList);

const r2 = document.createElement('h2');
r2.innerHTML = `List after sorting: (${sortedList})`;

resultDiv.appendChild(r1);
resultDiv.appendChild(r2);
