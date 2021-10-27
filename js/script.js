const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
];

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];

const numArray = 3;

// SI MI PIACE COMPLICARMI LA VITA XD
let postCard =new Array(items.length);

for(let i=0; i<items.length; i++){
    postCard[i] = new Array(numArray);
}

for(let i=0; i< items.length; i++){
    postCard[i][0] = document.createElement('img');
    postCard[i][0].src = items[i];
    postCard[i][1] = title[i];
    postCard[i][2] = text[i];
    console.log(postCard[i]);
}

let counter= 0;

const side = document.querySelector('.side');
const view = document.querySelector('.view');
console.log(side);
console.log(view);

let sideItems = new Array(5);

for(let i = 0; i < sideItems.length; i++){
    let item = document.createElement("div");
    item.classList += 'item';
    item.append(postCard[i][0]);
    sideItems[i] = item;
    console.log(item);
    side.append(item);
}

sideItems[0].classList.add("selected");