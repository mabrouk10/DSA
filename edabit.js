// function countTrue(array) {

//   let count = 0

//   for (let index = 0; index < array.length; index++) {
//     if(array[i] === true){
//       count++
//     }
//   }
//   return count
// }

// function possibleBonus(a, b) {
	
//   let poss = true

//   if(b<a || a + 6 < b || a===b){
//     poss = false
//   }else if (a+1<=b || a+2<=b|| a+3<=b|| a+4<=b|| a+5<=b|| a+6<=b){
//     poss = true
//   }
//   return poss
// }

// function addName (obj, name, value) {
//   obj[name] = value;
//   return obj;
// };

// class Rectangle {
//   constructor(x, y, width, height) {
// 		this.x = x;
// 		this.y = y;
//     this.height = height;
//     this.width = width;
//   }
// 	toString(){
// 		return `[x=${this.x}, y=${this.y}, width=${this.width}, height=${this.height}]`
// 	}
// }



// function evenLast(arr) {
// 	let total = 0
// 	if(arr.length === 0){
// 		return total
// 	}
// 	else{
//   let length = arr.length - 1
//   let sum = 0

//   for (let index = 0; index < arr.length; index++) {
//     if(index % 2 === 0){
//       sum = sum + arr[index]
//     }    
//   }
//   total = sum * arr[length]

// 	return total
// 	}
// }

// console.log(evenLast([1, 3, 3, 1, 10]))

// function arrayM(num, length){
//   let arr = []

//   for (let index = 1; index < length; index++) {
//     arr.push(num * index)
//   }
//   return arr
// }

// console.log(arrayM(5,3))

// function uniqueArray(arr) {
//   //your code here - remember iterable can be a string or an array
//   let newArr = arr.split("")

//   let finalArr = newArr.filter((value, index) => newArr.indexOf(value) === index)

//   return finalArr
// }

// console.log(uniqueArray('ABBCcAD'))

// function DNAStrand(dna){
//   //your code here

//   let array = dna.split("")
//   let newArr = []

//   for (let index = 0; index < array.length; index++) {
//     if(array[index] === 'A'){
//       newArr.push('T')
//     }else if(array[index] === 'T'){
//       newArr.push('A')
//     }else if(array[index] === 'G'){
//       newArr.push('C')
//     }else if(array[index] === 'C'){
//       newArr.push('G')
//     }
//   }

//   return newArr.join("")
// }

// console.log(DNAStrand("ATTGC"))

// function sumTwoSmallestNumbers(numbers){  
//   numbers = numbers.sort(function(a, b){return a - b; });
//   return numbers[0] + numbers[1];
// };

// function isTriangle(a,b,c)
// {
//   let one = (a * a) + (b*b)
//   console.log(one)
//   let three = c * c
//   console.log(three)

//   if(one === three){
//     return true
//   }else{
//     return false;
//   }
// }

// console.log(isTriangle(1,2,2))

// function duplicateCount(text){

//   let arr = text.toLowerCase().split('')

//   let farr = arr.filter((value, index) => arr.indexOf(value) != index)

//   console.log(farr)

//   if(arr.length === 0){
//     return 0
//   } else if(farr[0] === farr[1] ){
//     return 1
//   } else{
//     return farr.length
//   }
// }

// console.log(duplicateCount("abcde"))

// function longest(s1, s2) {
//   // your code

//   let s11 = s1.split('')
//   let s22 = s2.split('')
  
//   let arr = s11.concat(s22)

//   let farr = arr.filter((value, index) => arr.indexOf(value) === index)

//   return farr.sort().join('')

// }

// console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq"))

const prac = (s1, s2) => {
    let arr1 = s1.split('')
  let arr2 = s2.split('')
  let newArr = arr1.concat(arr2)
  newArr = newArr.filter((value,index)=> newArr.indexOf(value) === index)
  return newArr.sort().join('')
}

console.log(prac("xyaabbbccccdefww", "xxxxyyyyabklmopq"))
