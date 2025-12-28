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

let i = 0;
let interval = setInterval(() => {
    let spans = textTag.querySelectorAll('span');
    let singleSpan = spans[i];

    singleSpan.className = 'fadeMove';
    i++;

    if(i === spans.length){
        clearInterval(interval);
    }
}, 80);
