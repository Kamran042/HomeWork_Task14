//! Task1
//? Prompt vasitesile daxil olunmush ededin faktorialini tapin.
//? Numune : 3 daxil olarsa,1*2*3 cavab 6 qaytarsin.

// let eded = parseInt(prompt('Eded daxil edin'))
// let ededFaktorial = 1;
// for (let i = 1; i <= eded; i++) {
//     ededFaktorial *= i
//     console.log(i);
//     console.log(ededFaktorial);
// }
// alert(`Cavab: ${ededFaktorial}`)


//! Task 2
//? Verilmish arrayde en boyuk ededle,en kicik ededin yerini deyishen alqoritm yazin.
//? Let arr = [2,4,6,7,10,12,58,9]
//? Let newArr=[58,4,6,7,10,12,2,9]
//? Bele olsun.

// let arr = [2, 4, 6, 7, 10, 12, 58, 9];
// let max = arr[0];
// let min = arr[0];
// let maxIndex = 0;
// let minIndex = 0;
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i];
//         maxIndex = i;
//     }
//     if (arr[i] < min) {
//         min = arr[i];
//         minIndex = i;
//     }
// }
// [arr[maxIndex], arr[minIndex]] = [arr[minIndex], arr[maxIndex]];
// console.log(arr);


//! Task 3
//? Let arr = [2,4,6,7,10,12,58,9]
//? Verilmiş Arraydə tək elementlerden ən böyüyünü tapan alqoritm yazin.

// let arr = [2, 4, 6, 7, 10, 12, 58, 9];
// let max = arr[0];
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] % 2 ==1){
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
// }
// console.log(max);


//! Task 4
//? Bir ölçülü massivin minimum və maksimum elementlərinin ədədi ortasını
//? tapan proqram tərtib edin.
//? Example:[123,7,53,99] -> (123 + 7) /2 -> 65

// let arr = [123,7,53,99];
// let max = arr[0];
// let min = arr[0];
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i];
//     }
//     if (arr[i] < min) {
//         min = arr[i];
//     }
// }
// let result = (max + min)/2
// console.log(result);


//!Task 5
//? arrayin elementləri arasında minimum və maksimum elementi nəzərə almadan
//? yerdə qalan elementlərin cəmini tapan function

// let arr = [123,7,53,99];
// let max = arr[0];
// let min = arr[0];
// let sum = 0;
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i];
//     }
//     if (arr[i] < min) {
//         min = arr[i];
//     }
// }
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== min && arr[i] !== max) {
//         sum += arr[i];
//     }
// }
// console.log(sum);