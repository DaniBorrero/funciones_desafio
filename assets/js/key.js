const a = 'pink';
const s = 'orange';
const d = 'aqua';


function createDiv(key) {
    div = document.createElement('div')
    div.style.cssText +=  `width: 200px; height: 200px; border: 1px solid black; background-color: ${key} `
    document.body.appendChild(div);
}


document.addEventListener('keydown', function (event) {
    tag = document.getElementById('key')
    if (event.key === 'a') {
        tag.style.backgroundColor = a
    } else if (event.key === 's') {
        tag.style.backgroundColor = s
    }else if (event.key === 'd') {
        tag.style.backgroundColor = d
    }else if (event.key === 'q') {
        createDiv('purple')
    } else if (event.key === 'w') {
        createDiv('gray')
    } else if (event.key === 'e') {
        createDiv('saddlebrown')
        
    } 
})
