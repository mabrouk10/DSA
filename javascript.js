

// // GetSum(1, 0) == 1   // 1 + 0 = 1
// // GetSum(1, 2) == 3   // 1 + 2 = 3
// // GetSum(0, 1) == 1   // 0 + 1 = 1
// // GetSum(1, 1) == 1   // 1 Since both are same
// // GetSum(-1, 0) == -1 // -1 + 0 = -1
// // GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2


// const getSum = (a,b) => {

//     let sum = 0

//     if(a === b){
//         return a
//     }

//     if(a<b){
//         for (let i = a; i <= b; i++) {
//             sum += i
//         }
//     }else{
//         for (let i = b; i <= a; i++) {
//             sum += i
//         }
//     }

//     return sum
// }

// // console.log(getSum(-1,2))





// // deleteNth ([1,1,1,1],2) // return [1,1]

// // deleteNth ([20,37,20,21],1) // return [20,37,21]


// //create function

// //first arg is the array

// //second arg is how many times each number is allowed to be in array

// //do a for loop that iterates thru each element of array

// //count of each number cannot exceed the second arg

// const dup = (arr, n) => {


// let counterArr = [];
// let finalArr = [];

//   for(let i = 0, n = arr.length; i < n; i++){
//     let counter = 1;
//     for(let j = i+1; j < n; j++){
//         // console.log(arr[i])
//         // console.log(arr[j])
//         // console.log("instance")
//       if(arr[i] === arr[j]){
//         counter += 1;
//         // console.log(arr[i])
//         // console.log(arr[j])
//         // console.log(counter)
//       }
//     }
//     counterArr.push([arr[i], counter]);
//     // console.log(counterArr)
//   }

//   for(let i = 0; i < counterArr.length; i++){
//     let temp;
//     for(let j = i+1; j < counterArr.length; j++){
//         // console.log(counterArr[i])
//         console.log(counterArr[i][0])
//         // console.log(counterArr[j])
//         console.log(counterArr[j][0])
//         console.log("instance")
//       if(counterArr[i][0] === counterArr[j][0]){
//         temp = counterArr[i][1];
//         console.log(temp)
//         counterArr[i][1] = counterArr[j][1];
//         counterArr[j][1] = temp;
//         console.log(temp)
//       }
//     }
//     // console.log(counterArr)
//   }

//   counterArr.forEach( e => {
//     if(e[1] <= n){
//       finalArr.push(e[0]);
//     }
//   })

//   return finalArr;
// }

// console.log(dup([20,37,20,21],1))


// const unique = (arr) => {

//   var i = 0
//   for (var j = 1; j < arr.length; j++) {
//       if(arr[i] !== arr[j]){
//         i++
//         arr[i] = arr[j]
//   }
// }
//   return i + 1
// }


// console.log(unique([1,1,1,3]))


const power = (base, exp) => {

  if(exp === 0) return 1
  return base * power(base, exp - 1)

}

// console.log(power(2,4))

const fac = (num) => {

  if(num === 0) return 1
  return num * fac(num - 1)

}

// console.log(fac(3))


const productOfArray = (arr) => {

  if(arr.length === 1) return arr[0]
  return arr[0] * productOfArray(arr.slice(1))

}

// console.log(productOfArray([1,2,3,5]))


const recursiveRange = (num) => {

  if(num===0) return 0
  return num + recursiveRange(num - 1)

}

// console.log(recursiveRange(6))


const fib = (n) => {

  if(n <= 2) return 1
  return fib(n-1) + fib(n-2);

}

// console.log(fib(28))


const linearSearch = (arr, num) => {

  if(arr.includes(num)){
    return arr.indexOf(num)
  }else{
    return -1
  }
}

// console.log(linearSearch([10,15,20],15))


const binarySearch1 = (arr, num) => {

  // let middle = arr[Math.floor(arr.length / 2)]
  let left = 0
  let right = arr.length - 1
  let middle = Math.floor((left + right) / 2)

  while(arr[middle] !== num) {

    if(arr[middle] === num){
      return middle

    }else if(num > arr[middle]){
      left = arr.indexOf(middle)
      arr = arr.slice(left, right)
      console.log(arr)

    } else if(num < arr[middle]){
        right = arr.indexOf(middle)
        arr = arr.slice(left, right)
        console.log(arr)

    } else{
      return -1
    }
  }
  }

// console.log(binarySearch([4,7,3,5,10],5))

const binarySearch = (arr, elem) => {

  var start = 0
  var end = arr.length - 1
  var middle = Math.floor((start + end) / 2)

  while(arr[middle] !== elem && start<=end) {
    if(elem < arr[middle]) end = middle - 1
    else start = middle + 1
    middle = Math.floor((start + end) / 2)
  }

  return arr[middle] == elem ? middle : -1

  }

  // console.log(binarySearch([4,7,3,5,10],10))


  const naiveSearch = (long, short) => {
    var count = 0
    for (var i = 0; i < long.length; i++) {
      for (var j = 0; j < short.length; j++) {

        if(short[j] !== long[i+j]) break

        if(j === short.length - 1)count++
      }
    }
    return count
  }

  // console.log(naiveSearch('hillo', 'hi'))


  const bubble = (arr) => {

    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if(arr[j]>arr[j + 1]){
          //swap
          temp = arr[j]
          arr[j] = arr[j+1]
          arr[j+1] = temp
        }
      }

    }
    return arr
  }


  const bubbleSearch = (arr) => {
    var noSwaps;
    for (var i = arr.length; i > 0; i--) {
      noSwaps = true
      for (var j = 0; j < i - 1; j++) {
        if(arr[j] > arr[j + 1]){
          var temp = arr[j]
          arr[j] = arr[j + 1]
          arr[j+1] = temp
          noSwaps = false
        }
      }
      if(noSwaps) break;

    }
    return arr
  }

  // console.log(bubbleSearch([19, 5, 1, 8 ,9090]))


  function bubbleSort(arr) {
    const swap = (arr, idx1, idx2) => {
      [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };

    for (let i = arr.length; i > 0; i--) {
      for (let j = 0; j < i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          swap(arr, j, j + 1);
        }
      }
    }
    return arr;
  }


  function selectSort(arr) {

    for (let i = 0; i < arr.length; i++) {
      var smallest = i
      for (let j = i + 1; j < arr.length; j++) {
        if(arr[smallest] > arr[j]){
          smallest = j
        }
      }
      if(i !== smallest){
        var temp = arr[i]
        arr[i] = arr[smallest]
        arr[smallest] = temp
      }
    }
    return arr
  }

  // console.log(selectSort([19, 5, 1, 8 ,9090]))


// ES2015 VERSION
function selectionSort(arr) {
const swap = (arr, idx1, idx2) =>
  ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

for (let i = 0; i < arr.length; i++) {
  let lowest = i;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[lowest] > arr[j]) {
      lowest = j;
    }
  }
  if (i !== lowest) swap(arr, i, lowest);
}

return arr;
}

// selectionSort([0,2,34,22,10,19,17]);


function selectSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    var small = i
      for (let j = i+1; j < arr.length; j++) {
        if(arr[small] > arr[j]){
          small = j
        }
      }
      if(i !== small){
        var temp = arr[i]
        arr[i] = arr[small]
        arr[small] = temp
      }
  }
  return arr
}

// console.log(selectSort([5,3,6,100,6,8]))

function insertSort (arr) {

  for (var i = 1; i < arr.length; i++) {
    var current = arr[i]
    console.log(current)
    console.log(i)
      for (var j = i - 1; j >= 0 && arr[j] > current; j--) {
        console.log("i in loop:", i)
        console.log("j is:",j)
        console.log("current in loop:",current)
        console.log("arr[j] is:",arr[j])
        console.log("arr[j+1] is:",arr[j+1])

        arr[j + 1] = arr[j]

        console.log("arr[j] is:",arr[j])
        console.log("arr[j+1] is:",arr[j+1])
      }
      arr[j + 1] = current
      console.log("current:",current)
  }
  return arr
}

// console.log(insertSort([5,3,6,100,6,8]))


function sortInsert(arr){

  for (var i = 1; i < arr.length; i++) {
    var current = arr[i]
      for (var j = i - 1; j >= 0 && arr[j]>current; j--) {
        arr[j + 1] = arr[j]
      }
      arr[j + 1] = current
  }
return arr
}

// console.log(sortInsert([5,3,6,100,6,8]))


function mergeSort(arr1, arr2){
  let newArray = []
  let j = 0
  let i = 0
  while (i < arr1.length && j < arr2.length) {
    if(arr2[j] > arr1[i]){
      newArray.push(arr1[i])
      i++
    }else{
      newArray.push(arr2[j])
      j++
    }
  }
  while(i < arr1.length){
    newArray.push(arr1[i])
    i++
  }
  while(j < arr2.length){
    newArray.push(arr2[j])
    j++
  }
  return newArray
}

function merge (arr){
  if(arr.length <= 1) return arr
  let middle = Math.floor(arr.length / 2)
  let left = merge(arr.slice(0, middle))
  let right = merge(arr.slice(middle))
  return mergeSort(left, right)
}

// console.log(merge([10,4,5,7]))



function pivot(arr, start = 0, end = arr.length - 1){
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  }
    // We are assuming the pivot is always the first element
    let pivot = arr[start];
    let swapIdx = start;

    for (let i = start + 1; i <= end; i++) {
      if (pivot > arr[i]) {
        swapIdx++;
        swap(arr, swapIdx, i);
      }
    }

    // Swap the pivot from the start the swapPoint
    swap(arr, start, swapIdx);
    return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length -1){
  if(left < right){
      let pivotIndex = pivot(arr, left, right) //3
      //left
      quickSort(arr,left,pivotIndex-1);
      //right
      quickSort(arr,pivotIndex+1,right);
    }
   return arr;
}

// console.log(quickSort([100,-3,2,4,6,9,1,2,5,3,23]))




function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.ceil(Math.log10(Math.abs(num)));
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

function radixSort(nums){
    let maxDigitCount = mostDigits(nums);
    for(let k = 0; k < maxDigitCount; k++){
        let digitBuckets = Array.from({length: 10}, () => []);
        for(let i = 0; i < nums.length; i++){
            let digit = getDigit(nums[i],k);
            digitBuckets[digit].push(nums[i]);
        }
        nums = [].concat(...digitBuckets);
    }
    return nums;
}

// console.log(radixSort([23,345,5467,12,2345,9852]))
// console.log(getDigit(9852,0))
// console.log(digitCount(9852))
// console.log(mostDigits([23,345,5467,12,2345,9852]))

// let dogs = {
//   frenchBulldog: {
//     url: "https://dog.ceo/api/breed/bulldog/images/random",
//     name: "Frenchies"
//   },
//   germanShepherd: {
//     url: "https://dog.ceo/api/breed/germanshepherd/images/random",
//     name: "German Shepherds"
//   }
// }
let dogs = [
  {
    url: "https://dog.ceo/api/breed/bulldog/images/random",
    name: "Frenchies"
  },
  {
    url: "https://dog.ceo/api/breed/germanshepherd/images/random",
    name: "German Shepherds"
  }
]

const dogMap = (arr) => {

  let dogArray = arr.map(value => {
    console.log(`${value.name} and ${value.url}. ` )
  })

  return dogArray
}

// console.log(dogMap(dogs))

// (function() {
//   var a = b = 5;
// })();
//
// console.log(b);
//
// for (var i = 0; i < 3; i++) {
//   setTimeout(function() { alert(i); }, 1000 + i);
// }

function Palindrome(str) {

let strSpace = str.replace(/\s/g, '').split('').join('')
let strRev = strSpace.split('').reverse().join('')

console.log(strSpace)
console.log(strRev)

if(strSpace === strRev){
  return true
}

}

console.log(Palindrome('eye eye'))
console.log(Palindrome('jwijio'))
