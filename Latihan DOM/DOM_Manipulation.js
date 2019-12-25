// DOM Manipulation part 1

// const judul = document.getElementById('judul');
// judul.innerHTML = '<i>Esha Sajaka</i>';

// const secA =  document.querySelector('section#a');
// secA.innerHTML = 'Hello Wolrd';

// const judul = document.querySelector('#judul');
// judul.style.backgroundColor = 'lightblue';

// const judul = document.getElementsByTagName('h1')[0];
// judul.setAttribute('name', 'esha');

// const p2 = document.querySelector('.p2');
// // menambahkan class
// p2.classList.add('label'); 
// // menghapus class
// p2.classList.remove('label');
// // menambahkan apabila tidak ada dan menghapus bila sudah ada
// p2.classList.toggle('label');
// // mengetahui nama kelas element dengan urutan
// p2.classList.item(1);
// // mengetahui kelas dari namanya
// p2.classList.contains('label');
// // mengganti kelas
// p2.classList.replace('label', 'tes');


// DOM Manipulation Part 2

// createElement
const pBaru =  document.createElement('p');
// createTextNode
const textPBaru = document.createTextNode('Paragraf Baru');
// simpan tulisan ke dalam paragraf
pBaru.appendChild(textPBaru);
// simpan pBaru diakhir section A
const sectionA = document.getElementById('a');

// appendChild ==> simpan diakhir element
sectionA.appendChild(pBaru);

// bikin elemen dan isinya terus pasangkan
const liBaru = document.createElement('li');
const textLiBaru = document.createTextNode('Item Baru');
liBaru.appendChild(textLiBaru);
// panggil parent nya
const ul = document.querySelector('#b ul');
const li2 = ul.querySelector('li:nth-child(2)');

// insertBefore(nameElemen,elemenSetelah)
ul.insertBefore(liBaru,li2);

// removeChild
const link = sectionA.getElementsByTagName('a')[0];
sectionA.removeChild(link);

// replaceChild

// panggil parent dan elemen yang akan direplace
const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

// buat elemen barunya 
const judulBaru = document.createElement('h2');
const textJudulBaru = document.createTextNode('Judul Baru');
judulBaru.appendChild(textJudulBaru);

// replace elemennya
sectionB.replaceChild(judulBaru, p4);

pBaru.style.backgroundColor = 'lightgreen';
liBaru.style.backgroundColor = 'lightgreen';
judulBaru.style.backgroundColor = 'lightgreen';



// syntax manipulasi node
// - document.createElement()
// - document.createTextNode()
// - node.appendChild()
// - node.insertBefore()
// - parentNode.removeChild()
// - parentNode.replaceChild()
