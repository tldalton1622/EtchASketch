const gridDivs = document.getElementById('grid')
const selectBtn = document.getElementById('button');
const originalCells = document.getElementsByClassName('originalStyle');
const cellsChangedToBlack = document.getElementsByClassName('changedToBlack')

function makeGrid(cols) {
    cols = 16;
    gridDivs.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    for (i=0; i < (cols * cols); i++) {
        let e = document.createElement('div');
        e.classList.add('originalStyle');
        for (const element of originalCells) {
            element.addEventListener('mouseover', _changeToBlack)
        };
        gridDivs.appendChild(e);
    }};

function _changeToBlack() {
    this.classList.add('changedToBlack');
};


selectBtn.addEventListener('click', () => {
    let changed = document.getElementsByClassName('originalStyle');
    for(let elem of changed) {
        elem.classList.remove('changedToBlack');
    }});
    
    


makeGrid();
