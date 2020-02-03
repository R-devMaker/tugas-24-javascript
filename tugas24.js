var angka = [32,33,16,40,9,7,11,2,44,1,66];
console.log("Sebelumnya : ",(angka.slice(0)).join(","));

var ascen = angka.sort();
console.log("Ascending : ",(ascen.slice(0)).join(","));

var descen = ascen.reverse();
console.log("Descending : ",(descen.slice(0)).join(","));


