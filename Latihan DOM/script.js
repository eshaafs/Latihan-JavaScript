// DOM Selection

// document.getElementById() ==> element
// const judul = document.getElementById('judul');
// judul.style.color = 'red';
// judul.style.backgroundColor = 'grey';
// judul.innerHTML = 'Esha Sajaka';

// document.getElementsByTagName() ==> HTML Collection
// const p = document.getElementsByTagName('p');
// for (let i = 0; i < p.length; i++) {
// 	p[i].style.backgroundColor = 'lightblue';
// }
// const h1 = document.getElementsByTagName('h1')[0];
// h1.style.fontSize = '50px';

// document.getweElementsbyClassName() ==> HTMLCollection
// const p1 = document.getElementsByClassName('p1');
// p1[0].innerHTML = 'Ini diubah dari javascript';

// document.querySelector() ==> element
// const p4 = document.querySelector('#b p');
// p4.style.color = 'green';
// p4.style.fontSize = '30px';

// const li2 = document.querySelector('section#b ul li:nth-child(2)');
// li2.style.backgroundColor = 'orange';

// // hanya mengambil element pertama
// const p = document.querySelector('p');
// p.innerHTML = 'ini diubah melalui javascript'; 

// // document.querySelectorAll
// const p = document.querySelectorAll('p');
// p[1].style.backgroundColor = 'lightblue';



// DOM Manipulation

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