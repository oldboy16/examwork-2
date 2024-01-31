//1
let a = [1, 2, 3, 4, 5];
let b = [];

let sum = 0;
for (let i = a.length - 1; i >= 0; i--) {
  sum += a[i];
  b.unshift(sum);
}

console.log(b);

//2
let arr = [2,10,5,8,12]
let result = []

let amount = 0
for(let i=arr.length - 1; i>=0; i--){
    amount += arr[i]
    result.unshift(amount)
}
console.log(result);


//3
let arr1 = [9,14,3,2,1]
let natija = []

let miqdor = 0
for(let i = arr1.length-1; i>=0; i--){
    miqdor+=arr1[i]
    natija.unshift(miqdor)
}
console.log(natija);