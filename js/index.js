// Your code goes here


// mouseenter & mouseover

let navLink = document.querySelector('.nav');

navLink.addEventListener('mouseenter', (event) => {
    event.target.style.color = 'blue';

    setTimeout(()=> {
        event.target.style.color = "";
    }, 500);
}, false);

navLink.addEventListener('mouseover', (event) => {
    event.target.style.color = 'orange';

    setTimeout(()=> {
        event.target.style.color = "";
    }, 500);
}, false);


// wheel

function zoom(event) {
    event.preventDefault();
    scale += event.deltaY * -0.01;
    scale = Math.min(Math.max(.125, scale), 4);
    el.style.transform = `scale(${scale})`;
}

let scale = 1;
const el = document.querySelector('img');
el.onwheel = zoom;

// resize 

const roundedPic = document.querySelector('.rounded');
window.addEventListener('resize', ()=> {
    roundedPic.src = 'img/travel.jpg';
});

// click

let morewords = document.querySelector('h2');

document.onclick = inputChange;
function inputChange(e){
    morewords.textContent = "It's where all the fun takes place!" ;
    event.stopPropagation();
};


const body = document.querySelector('.home');
body.addEventListener('click', (event) => {
  console.log('Clicked body!');
});
const cardGroup = document.querySelector('.intro');
cardGroup.addEventListener('click', (event) => {
  console.log('Clicked intro!');
  event.stopPropagation();
});
const card = document.querySelector('h2');
card.addEventListener('click', (event) => {
  console.log('Clicked fun bus!');
  event.stopPropagation();
});

// double click

const firstPara = document.querySelector('.content-destination p');

firstPara.addEventListener('dblclick', (e)=>{
    firstPara.classList.toggle('large');
    firstPara.style.transform = "scale(1.2)";
});


// select

const containerSelect = document.getElementsByClassName('.destination');

containerSelect.addEventListener('onselect', (event) =>{
    containerSelect.style.red = "red";
});
    

// focus

const funBus = document.querySelector('h1');

funBus.addEventListener('focus', (event) => {
    funBus.style.background = "orange";

});

// transition

const rotateHeader = document.querySelector('h1');

rotateHeader.addEventListener('transitionstart', (event)=>{
    rotateHeader.style.transform = "rotate(180deg)"
});

// before print

window.addEventListener('beforeprint', myFunction);
function myFunction() {
  alert("You are about to print this document!");
};


// prevent default action

const stopTheLink = document.querySelector('.nav-link');

stopTheLink.addEventListener('click', (event) => {
  console.log('Stopping the link!');
  event.preventDefault();
});

