const imaString = 'hi';




console.log("hi");


const age = 99;

if (age < 21) {
    console.log('stay away');
} else if(age > 75) {
    console.log('its nap time');
}else {
    console.log('party');
}


if (age >= 21) {
    console.log('call an uber')
} else{
    console.log('bring your fake id next time')
}



const authenticated = false;

if (authenticated) {
    console.log('you are loggedin')
} else {
    console.log('you need to log in')
}


const a = 1;
const b = '1';

// a === b // false
// a == b // true


// a !== b // true
// a != b // false

// const favoriteColor = 'blue';
// const favoriteAnimal = 'bear';

// if(favoriteAnimal === 'bear'&& favoriteColor === 'blue' ){
//     console.log('welcom to the club');
// } else if(favoriteAnimal === 'cat' || favoriteColor 'blue');{
//     console.log('$500 to join the club');
// } else { 
//     console.log('go away');
// }

const hiDiv = document.getElementById('hi');
console.log(hiDiv);


const pie = 'peach';
console.log('pie length: ', pie.length);//5
console.log('#3', pie.charAt(2));//a
console.log('indexof cat', pie.indexOf('cat'));//-1
console.log('indexof pea', pie.indexOf('pea'));//0



const quote = 'winter is coming';
const newQuote = quote.replace(/is/g, "ain't");
console.log('newQuote', newQuote);