let textTag = document.querySelector('.section1 h1');
let text = textTag.innerText;
let splittedText = text.split('');

textTag.innerHTML = '';
for(let i=0; i<splittedText.length; i++){
    textTag.innerHTML += `<span>${splittedText[i]}</span>`;
}


