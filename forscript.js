/*
let div = document.querySelectorAll('.one');
console.log(div);
//div.style.background = 'red';

for (let i = 0; i < div.length; i++) {
    console.log(div[i]);
    div[i].style.background = 'red';
    div[i].onclick = two;
}

function two() {
    console.log('work!!!');
}

let b = document.getElementsByClassName('one');
console.log(b);

for (let i = 0; i < b.length; i++) {
    b[i].style.border = '1px solid black';
}
*/

document.querySelector('button').onclick = () => {
    let r = document.querySelectorAll('input[type="radio"]');
    console.log(r);
    for (let i = 0; i < r.length; i++) {
        if (r[i].cheked) {
            console.log(r[i].value);
        }
    }
}