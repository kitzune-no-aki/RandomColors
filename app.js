const button = document.querySelector('#button');
const h1 = document.querySelector('#h1');

button.addEventListener('click', function(){
    const newColor = randomColor();
    document.body.style.backgroundColor = newColor;
    document.getElementById('button').style.color = newColor;
    h1.innerText= newColor;
})

const randomColor = () => {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
}




