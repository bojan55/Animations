//heading
let textTag = document.querySelector('.section1 h1');
let text = textTag.innerText;
let splittedText = text.split('');

textTag.innerHTML = '';
for(let i=0; i<splittedText.length; i++){
    if(splittedText[i] == " "){
        splittedText[i] = "&nbsp;";
    }
    textTag.innerHTML += `<span>${splittedText[i]}</span>`;
}

let spans = textTag.querySelectorAll('span');
let i = 0;
let interval = setInterval(() => {
    let singleSpan = spans[i];

    singleSpan.className = 'fadeMove';
    i++;

    if(i === spans.length){
        clearInterval(interval);
    }
}, 80);

//line
let border = document.querySelector(".border-line");
let animationWidth = 0;
window.onscroll = () => {

    if(this.oldScroll > this.scrollY){
        animationWidth -= 1.5;
    }else {
        animationWidth += 1.5;
    }

    if(animationWidth >= 100){
        animationWidth = 100;
    }

    if(animationWidth <= 0){
        animationWidth = 0;
    }
    
    border.style.width = animationWidth + '%';
    this.oldScroll = this.scrollY;

    //images
    let sectionForAnimation = document.querySelector('.section2 .images');
    let sectionPosition = sectionForAnimation.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.2;
    let leftImage = document.querySelector('.slideFromLeft');
    let rightImage = document.querySelector('.slideFromRight');

    if(sectionPosition < screenPosition){
        leftImage.classList.add('animated');
        rightImage.classList.add('animated');
    }
}


