const grid = document.querySelector ('#grid');

function createGrid(){
    for (let i = 0; i < 256; i++){
        const div = document.createElement('div');
        div.classList.add('cell');
        div.addEventListener('mouseover', function(e){
            e.target.style.backgroundColor = 'black';
        })
        grid.appendChild(div);
    }
}

function removeAllChildNodes(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild)
    }
}

function getRandomColor(){
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random()*16)];
    }
    return color;
}

const sizeSlider = document.querySelector('#sizeSlider');
const sizeValue = document.querySelector('#sizeValue');
sizeSlider.addEventListener('input',function(){
    let size = document.getElementById('sizeSlider').value;
    sizeValue.textContent = size +" x "+ size;
    removeAllChildNodes(grid);
    grid.setAttribute('style', `grid-template-columns: repeat(${size},1fr); grid-template-rows: repeat(${size},1fr);`)
    for(let i = 0; i < size*size; i++){
        const div = document.createElement('div');
        div.classList.add('cell');
        div.addEventListener('mouseover',function(e){
            e.target.style.backgroundColor = 'black';
        })
        grid.appendChild(div);
    }
})

const clearButton = document.querySelector('#clearButton');
clearButton.addEventListener('click',function(){
    let size = document.getElementById('sizeSlider').value;
    let cell = grid.children;
    for (let i = 0; i < size*size; i++){
        cell[i].style.backgroundColor = 'white';
    }
})

const rainbowButton = document.querySelector('#rainbowButton');
rainbowButton.addEventListener('click',function(){
    let size = document.getElementById('sizeSlider').value;
    let cell = grid.children;
    for (let i = 0; i < size*size; i++){
        cell[i].addEventListener('mouseover', function(e){
            e.target.style.backgroundColor = getRandomColor();
        })
    }
})

const blackButton = document.querySelector('#blackButton');
blackButton.addEventListener('click', function(){
    let size = document.getElementById('sizeSlider').value;
    let cell = grid.children;
    for (let i = 0; i < size*size; i++){
        cell[i].addEventListener('mouseover',function(e){
            e.target.style.backgroundColor = 'black';
        })
    }
})

const eraserButton = document.querySelector('#eraserButton');
eraserButton.addEventListener('click', function(){
    let size = document.getElementById('sizeSlider').value;
    let cell = grid.children;
    for (let i = 0; i < size*size; i++){
        cell[i].addEventListener('mouseover', function(e){
            e.target.style.backgroundColor = 'white';
        })
    }

})

createGrid();