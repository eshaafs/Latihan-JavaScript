var penumpang = [];
var tambahPenumpang = function(namaPenumpang, penumpang) {
	// jika angkot kosong 
	if (penumpang.length == 0){
		// tambah penumpang di awal array
		penumpang.push(namaPenumpang);
		// kembalikan isi array dan keluar dari function
		return penumpang;
	} 	
	else {
		// telusuri seluruh kursi dari awal
		for (var i = 0; i < penumpang.length; i++){
			// jika ada kursi kosong
			if(penumpang[i] == undefined){
				// tambahkan penumpang di kursi tersebut
				penumpang[i] = namaPenumpang;
				// kembalikan isi array dan keluar dari function
				return penumpang;
			}
			// jika sudah ada nama yang sama
			else if (penumpang[i] == namaPenumpang){
				// tampilkan pesan kesalahan
				console.log(namaPenumpang + ' sudah ada di dalam angkot.');
				return penumpang;
			}
			// jika seluruh kursi sudah terisi
			else if (i == penumpang.length - 1) {
				// tambahkan penumpang diakhir array
				penumpang.push(namaPenumpang);
				// kembalikan isi array dan keluar dari function
				return penumpang;
			}
		}
	}	
}
var hapusPenumpang = function(namaPenumpang, penumpang) {
	// jika angkot kosong
	if (penumpang.length == 0) {
		// tampilkan pesan bahwa angkot kosong, dan 
		console.log('Maaf angkot sedang kosong.');
		// tidak mungkin ada penumpang turun
		console.log('Tidak mungkin ada penumpang turun.');
		// kembalikan isi array dan keluar dari function
		return penumpang;
	}
	else {
		// telusuri seluruh kursi dari awal
		for (i = 0; i < penumpang.length; i++){
			// jika nama penumpang sesuai
			if (penumpang[i] == namaPenumpang) {
				// hapus penumpang dengan mengubah namanya jadi undefined
				penumpang[i] = undefined;
				// kembalikan isi array dan keluar dari function
				return penumpang;
			}
			// jika tidak ada nama yang sesuai
			else if (penumpang[i] !== namaPenumpang) {
				// tampilkan pesan kesalahan
				console.log('Tidak ada penumpang dengan nama ' + namaPenumpang);
				// kembalikan isi array dan keluar dari function
				return penumpang;
			}
		}
	}
}