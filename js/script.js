"use strict";

const   box = document.getElementById('box'),
        btns = document.getElementsByTagName('button'),
        circles = document.getElementsByClassName('circle'),
        hearts = document.querySelectorAll('.heart'),
        oneHeart = document.querySelector('.heart'),
        wrapper = document.querySelector('.wrapper');
console.dir(box);

// box.style.backgroundColor = 'lightblue';
// box.style.width = '500px';
let num = 700 + 'px';
box.style.cssText = `background-color: blue; width: ${num}`;

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'lightblue';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'lightblue';
});

const div = document.createElement('div');
// const text = document.createTextNode('Im this');

div.classList.add('black');

// document.body.append(div);
wrapper.append(div);
// wrapper.prepend(div);

// const blach = document.querySelector('.black');
// blach.style.backgroundColor = 'blue';

// // hearts[0].before(div);
// hearts[1].after(div);

// // circles[0].remove();

// hearts[0].replaceWith(circles[0]);

div.innerHTML = "<h3>Hello world</h3>";

// div.textContent = "Hello";

div.insertAdjacentHTML('beforeend', '<h2>Hello</h2>');