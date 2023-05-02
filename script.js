/*let a = 6;

if (a > 7) {
    console.log("yes");
}
else {
    console.log("no");
}
*/

/*const button = document.querySelector('button');
const input = document.querySelector('.age');

button.onclick = () => {
    let num = +input.value;
    if (num >= 16 && num <60) {
        console.log('welcome!!!');
    }
    else if (num >= 60 ) {
        console.log('Ты точно сюда?');
    }
    else {
        console.log('Ты не пройдешь!'); 
    }

switch (num) {
    case 15:
        console.log('Еще рановато)');
        break;
    case 16:
        console.log('Уже можно)');
        break;
    default:
            console.log('Уже давно пора)');  
}
}

let b = 5;

console.log(b!=7 || b>=5)
*/

/*let a = prompt('Введите значение')
let b = +a
console.log(typeof b);
if (b%2 === 0) {
	console.log("Число четное")
}
else {
	console.log("Число нечетное")
*/

const str= 'Hello';
const reverse = str.split('').reverse().join('');
console.log(reverse);

let mass = [1, 45, 78, 345, 908, 21, 54, 77]
	console.log(mass.length)
	let index;
	for (index = 0; index < mass.length; ++index) {
		console.log(mass[index]);
	}