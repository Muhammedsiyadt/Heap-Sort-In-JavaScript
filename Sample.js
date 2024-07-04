
function heapSort(arr){
    buildMaxHeap(arr)
}

function buildMaxHeap(arr){
    const n = arr.length 
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr , n , i)
    }
}

function heapify(arr , n , i){
    let largest = i
    let l = 2 * i + 1
    let r = 2 * i + 2

    if(l < n && arr[l] > arr[largest]){
        largest = l
    }

    if(r < n && arr[r] > arr[largest]){
        largest = r
    }

    if(largest !== i){
        swap(arr , i , largest)
        heapify(arr , n , largest)
    }


}