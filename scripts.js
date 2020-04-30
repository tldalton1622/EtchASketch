const gridSize = 16


for (i=0; i < gridSize; i++) {
    const grid = document.createElement('div'); 

    grid.classList.add('descendant');
    gridDivs.appendChild(grid);
};
//let elements = document.querySelector('div');
let elements = document.getElementsByClassName('descendant');
for (i=0; i < elements.length; i++) {
    elements[i].addEventListener('mouseover', function(e)  {
        this.classList.add('changedDescendant');
    }
    
    )};
    
    
    




