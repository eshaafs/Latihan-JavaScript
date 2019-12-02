// this
// this === global
// console.log (this);
// var a = 10;
// console.log(this.a);

// cara 1 - function declaration
function hello() {
	console.log(this);
	console.log('hello')
}
this.hello();
// this mengembalikan objek global


// cara 2 - object literal
// var obj = {a : 10, nama : 'esha'};
// obj.hello = function(){
// 	console.log(this);
// 	// console.log('hello');
// }
// obj.hello();
// this mengembalikan object yang bersangkutan


// cara 3 - contrutor

function hello() {
	console.log(this);
	console.log('hello');
}
new hello();
// this mengembalikan object yang baru dibuat



 // membuat object

// // object literal
// var mhs1 = {
// 	nama : 'Esha Sajaka',
// 	umur : 19,
// 	ips : [3.20, 3.30, 3.50],
// 	alamat : {
// 		jalan : 'Jl. Masjid At Taqwa',
// 		kota : 'Jakarta Barat',
// 		provinsi : 'DKI Jakarta'
// 	}
// };
// var mhs2 = {};
// mhs2.nama = 'Bagus Satria';
// mhs2.umur = 19;
// mhs2.ips = [3.0, 3.10, 2.25];
// mhs2.alamat = {
// 	jalan : 'jalan duren sawit',
// 	kota : 'Semarang',
// 	provinsi : 'Jawa Tengah'
// }

// // function declaration
// function buatObjectMahasiswa(nama, umur, alamat){
// 	var mhs = {};
// 	mhs.nama = nama;
// 	mhs.umur = umur;
// 	mhs.alamat = alamat;
// 	return mhs;
// }

// var mhs3 = buatObjectMahasiswa('Wahyu Saputra', 19, 'Semarang');

// // constructor
// function Mahasiswa(nama, umur, alamat) {
// 	//var this{};
// 	this.nama = nama;
// 	this.umur = umur;
// 	this.alamat = alamat;
// 	//return this;
// }

// var mhs4 = new Mahasiswa('Roziqin', 19, 'Tangerang');


