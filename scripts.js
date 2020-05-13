//const gridSize = 16
let selectGrid = document.querySelector('#gridDivs');
let selectBtn = document.querySelector('#button');
let gridSize = 16




var createGridFunction = (function () { 
     x = gridSize;
    for (let i=0; i < x; i++) {
        
        var creatingElement = document.createElement('div')
        creatingElement.classList.add('descendant');
        selectGrid.appendChild(creatingElement);
    }
}());


//let elements = document.querySelector('div');
let elements = document.getElementsByClassName('descendant');

var changeElementToBlackFunction = (function () {
    for (let i=0; i < elements.length; i++) {
        elements[i].addEventListener('mouseover', function(e)  {
        this.classList.add('changedDescendant');
        }
        )};
}());
    
var btnClear = selectBtn.addEventListener('click', function(e) {
    var x = document.getElementsByClassName('changedDescendant');
    while (x.length)
        x[0].classList.remove('changedDescendant')
});
    




