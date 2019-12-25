const tUbahWarna = document.getElementById('tUbahWarna');
tUbahWarna.addEventListener('click',function(){
    // document.body.style.background = 'darkgrey';
    // document.body.setAttribute('class','darkgrey');
    document.body.classList.toggle('darkgrey');
    document.body.setAttribute('style','');
})



const tAcakWarna = document.createElement('button');
const teksTombol = document.createTextNode('Acak Warna');
tAcakWarna.appendChild(teksTombol);
tAcakWarna.setAttribute('type','button');
tUbahWarna.after(tAcakWarna);

tAcakWarna.addEventListener('click', function(){
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
})


const resetWarna = document.createElement('button');
const tResetWarna = document.createTextNode('Reset');
resetWarna.appendChild(tResetWarna);
resetWarna.setAttribute('type','button');
tAcakWarna.after(resetWarna);

resetWarna.addEventListener('click', function(){
    document.body.removeAttribute('style');
    document.body.removeAttribute('class');
})


const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');



sMerah.addEventListener('input',function(){
    const r = sMerah.value
    const g = sHijau.value
    const b = sBiru.value
    document.body.style.backgroundColor = 'rgb('+ r +' , '+ g +' , '+ b +')'
})

sHijau.addEventListener('input',function(){
    const r = sMerah.value
    const g = sHijau.value
    const b = sBiru.value
    document.body.style.backgroundColor = 'rgb('+ r +' , '+ g +' , '+ b +')'
})

sBiru.addEventListener('input',function(){
    const r = sMerah.value
    const g = sHijau.value
    const b = sBiru.value
    document.body.style.backgroundColor = 'rgb('+ r +' , '+ g +' , '+ b +')'
})



document.body.addEventListener('mousemove', function(event){
    // posisi mouse
    // console.log(event.ClientY);
    // ukuran browser
    // console.log(window.innerWidth);

    const xPos = Math.round((event.clientX / innerWidth) * 255);
    const yPos = Math.round((event.clientY / innerHeight) * 255);
    console.log(xPos);
    document.body.style.backgroundColor = 'rgb('+ xPos +' , '+ yPos +', 100)';
});