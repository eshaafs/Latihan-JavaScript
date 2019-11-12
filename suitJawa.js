// menangkap pilihan player
var p = prompt('Silakan pilih pilihannya : gajah, semut, orang')

// menangkap pilihan komputer
// membangkitkan bilangan random 

var comp = Math.random();

if(comp < 0.34) {
    comp = 'gajah';
} else if(comp >= 0.34 && < 0.67) {
    comp = 'semut';
} else{
    comp = 'orang';
}

console.log(comp);