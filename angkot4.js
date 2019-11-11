var jumlahAngkot = 10;
var nomorAngkot = 1;
var angkotBeroperasi = 6;
var angkotLembur = 8;

for(nomorAngkot; nomorAngkot <= jumlahAngkot; nomorAngkot++){
    if(nomorAngkot <= angkotBeroperasi){
        console.log('Angkot No. ' + nomorAngkot + ' beroperasi dengan baik.')
    }
    else if(nomorAngkot == angkotLembur){
        console.log('Angkot No. ' + nomorAngkot + ' sedang lembur.');
    }
    else{
        console.log('Angkot No. ' + nomorAngkot + ' sedang tidak beroperasi.');
    }
}