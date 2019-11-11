// game
alert('Hello!');
var nama = prompt('What is your name ?');
alert('Welcome ' + nama);
var play = confirm('Do you want to play game number ?')
while(play ==  true){
    var numbers = prompt('What number you like ?');
    if(numbers % 2 === 0){
        alert(numbers+ ' is even number');
    } 

    else if(numbers % 2 === 1){
        alert(numbers + ' is odd number');
    }

    else {
        alert('your input is not number!');           
    }

    play = confirm('Play again ?');
}
alert('Thank You!');