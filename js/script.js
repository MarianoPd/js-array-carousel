const numElements = 5;

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
let postCards =new Array(numElements);

for(let i=0; i<items.length; i++){
    postCards[i] = new Array(numArray);
}

for(let i=0; i < numElements; i++){
    postCards[i][0] = document.createElement('img');
    postCards[i][0].src = items[i];
    postCards[i][1] = document.createElement('h3');
    postCards[i][1].append(title[i]);
    postCards[i][2] = document.createElement('p');
    postCards[i][2].append(text[i]);
}

const side = document.querySelector('.side');
const view = document.querySelector('.view');


let sideItems = new Array(numElements);
let viewCard = new Array(numElements);

for(let i = 0; i < sideItems.length; i++){
    let item = document.createElement("div");
    item.classList += 'item';
    item.append(postCards[i][0]);
    sideItems[i] = item;
    side.append(item);

    let card = document.createElement('div');
    card.classList += 'card';
    card.append(postCards[i][0].cloneNode(true));
    let caption = document.createElement('div');
    caption.classList += 'caption';
    caption.append(postCards[i][1].cloneNode(true));
    caption.append(postCards[i][2].cloneNode(true));
    card.append(caption);
    viewCard[i] = card;
    view.appendChild(card);
}


sideItems[0].classList.add("selected");
viewCard[0].classList.add("active");

let counter= 0;

const prev = document.getElementById("prev")
const next = document.getElementById("next");
console.log(prev);
console.log(next);


prev.addEventListener('click', function(){
    let countPrev = counter;
    counter--;
    if(counter < 0) counter = numElements - 1;
    sideItems[countPrev].classList.remove("selected");
    viewCard[countPrev].classList.remove("active");
    sideItems[counter].classList.add("selected");
    viewCard[counter].classList.add("active")
});
next.addEventListener('click', function(){
    let countPrev = counter;
    counter++;
    if(counter >= numElements) counter = 0;
    sideItems[countPrev].classList.remove("selected");
    viewCard[countPrev].classList.remove("active");
    sideItems[counter].classList.add("selected");
    viewCard[counter].classList.add("active");
});
