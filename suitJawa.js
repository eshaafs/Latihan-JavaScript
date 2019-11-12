// menangkap pilihan player
var main = true;
while (main) {
var p = prompt('Silakan pilih pilihannya : gajah, semut, orang');

// menangkap pilihan komputer
// membangkitkan bilangan random 

var comp = Math.random();

if ( comp < 0.34 ) {
    comp = 'gajah';
} else if ( comp >= 0.34 && comp < 0.67 ) {
    comp = 'semut';
} else {
    comp = 'orang';
}

// menentukan rules
var hasil;
if ( p == comp ){
    hasil = 'SERI';
} else if ( p == 'gajah') {
    // if ( comp == 'orang' ) {
    //     hasil = 'MENANG';
    // } else {
    //     hasil = 'KALAH';
    // }
    hasil = ( comp == 'orang' ) ? 'MENANG' : 'KALAH';
} else if ( p == 'semut' ) {
    hasil = ( comp == 'gajah') ? 'MENANG' : 'KALAH';
} else if ( p == 'orang' ) {
    hasil = ( comp == 'semut' ) ? 'MENANG' : 'KALAH';
} else {
    hasil = 'Anda tidak memasukkan pilihan dengan benar!';
}

// Menampilkan hasil
alert("Kamu memilih '" + p + "' sedangkan komputer memilih '" + comp + "', maka hasilnya kamu " + hasil);
main = confirm('Ingin main lagi ?');
}

alert('Terimakasih sudah bermain');