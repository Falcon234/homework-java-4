let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}
for (let j = 2; j <= 20; j++) {
    if (j % 2 !== 0) continue;
    console.log(j);
}
for (let k = 1; k <= 10; k++) {
    console.log(`7 x ${k} = ${7 * k}`);
}
let arr1 = [1, 2, 3, 4, 5];
let index = 0;
while (index < arr1.length) {
    console.log(arr1[index]);
    index++;
}
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let num of arr2) {
    if (num === 7) break;
    console.log(num);
}
let n = 15; 
for (let x = 1; x < 100; x++) {
    console.log(x);
}
let y = 1;
while (y <= 20) {
    if (y % 3 === 0) {
        y++;
        continue;
    }
    console.log(y);
    y++;
}
