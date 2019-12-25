// event handler ==> menimpa perubahan sebelumnya

const p3 = document.querySelector('.p3');

function ubahWarna(){
	p3.style.backgroundColor = 'lightblue';
} 

p3.onclick = ubahWarna;


// addEventListener ==> tidak menimpa perubahan sebelumnya, namun menambah

const p4 = document.querySelector('#b p');
p4.addEventListener('click',function(){
	const ul = document.querySelector('ul');
	const liBaru = document.createElement('li');
	const textLiBaru = document.createTextNode('List Baru');
	liBaru.appendChild(textLiBaru);
	ul.appendChild(liBaru);
})