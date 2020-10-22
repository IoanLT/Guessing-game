let playerName = prompt('What is your name ?');

const random = Math.floor(Math.random() * 100) + 1;

let playerNumber = parseInt(prompt('Type in a number between 1 and 100'));

if(random > playerNumber){
    console.log('It is less');
} 
else if(random < playerNumber){
    console.log('It is more');
}
else if(random === playerNumber){
    console.log(`${playerName} wins`);
} 
else {
    console.log('Invalid reference');
} 










