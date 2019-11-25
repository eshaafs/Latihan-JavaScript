//Metho array
//1. length = untuk mengetahui panjang array

//2. Join = untuk menampilkan array dalam bentuk string
//var nama = ['Esha', 'Apria', 'Fitra', 'Sajaka'];
//console.log(nama.join(', ')); //==> separtor defaultnya ','

//3. push = menambah element diakir array
//nama.push('leone','BlackBlitz'); //==>bisa langsung menambahkan lebih dari satu

//4. pop = menghilangkan elemen terakhir dari array
//nama.pop();
//nama.pop();  //==> hanya bisa satu2

//5. unshift = menambahkan element diawal array
//nama.unshift('Bagus'); //==>bisa langsung menambahkan lebih dari satu

//6. shift = mengilangkan element awal array
//nama.shift();

//7. splice = menyisipkan element array ditengah-tengah
//rumus = splice(indexAwal, mauDihapusBerapa, elementBaru1, elementBaru2, ..);
//nama.splice(2, 0, 'Aris');

//8. slice = mengiris array untuk mengambil beberapa bagian array dan membuat array baru dimana array lama tetap ada
//rumus = slice(posisiAwal, posisiAkhir) ==> index awal akan terbawa di array baru sedangkan index akhir tidak terbawa
//var nama2 = nama.slice(1,3);

//9. forEach = untuk memanggil setiap elementnya
//var angka = [1,2,3,4,5,6,7,8];
//var cetak = function(nilai){
//    console.log(nilai);
//};
//angka.forEach(cetak);

// var nama = ['Esha', 'Apria', 'Fitra', 'Sajaka'];
// for(var i=0; i<nama.length; i++){
// 	console.log(nama[i]);
// }
// nama.forEach(function(value,index){
//    console.log('Mahasiswa No. ' + (index + 1) + ' Adalah ' + value);
// });

//10. map = mengembalikan array
// var angka = [1,2,3,4,5,6,7,8];
// var angka2 = angka.map(function(value){
//     return value * 2;
// });
// console.log(angka2.join(', '));

// var nama = 'Esha Apria FS'
// function cetak(a){
// 	console.log(a);
// };
//  cetak(nama);

//11. sort ==> untuk mengurutkan array
// var angkaAcak = [9, 5, 1, 3, 2, 4, 7, 8];
// angkaAcak.sort();
// console.log(angkaAcak.join(', '));

// jika ada puluhan
// var angkaAcak2 = [10, 20, 9, 5, 1, 3, 2, 4, 7, 8];
// angkaAcak2.sort(function(a,b){
// 	return a - b;
// });
// console.log(angkaAcak2.join(', '));

//12. Filter ==> untuk menfilter value array dan membuat array baru
var angka = [1,2,3,4,5,6,7,8];
var angka2 = angka.filter(function(x) {
	return x > 2;
});
console.log(angka2.join(' , '));

//13. Find ==> digunakan untuk mencari nilai, hanya menghasilkan satu nilai bukan nilai jadi tidak bisa menggunakan method join karena join digunakan untuk menggabungkan value array

var angka = [1,2,3,4,5,6,7,8];
var angka3 = angka.find(function(x) {
	return x > 2;
});
console.log(angka3);