const grid = document.querySelector("#container");
const updateButton = document.querySelector("#update")
const blackButton = document.querySelector('#black')
const greyButton = document.querySelector('#grey')
const randomColorButton = document.querySelector('#random-color')
const eraserButton = document.querySelector('#eraser')


function getRangeValue(){
  let rangeValue = document.querySelector("#range-slider").value;
  return rangeValue
}


function defaultGrid(){
  for(let i = 0; i < 16* 16; i++){
    const unit = document.createElement('div');
    grid.appendChild(unit);
    unit.style.cssText = "border: 1px solid black";
    
  }
}

defaultGrid()


function setGridSize(){
  while(grid.firstChild){
    grid.removeChild(grid.lastChild);
  }
  grid.style.gridTemplateColumns = `repeat(${getRangeValue()}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${getRangeValue()}, 1fr)`;
  for(let i = 0; i < getRangeValue() * getRangeValue(); i++){
    const unit = document.createElement('div');
    grid.appendChild(unit);
    unit.style.cssText = "border: 1px solid black";
  } 
}

function colorUnitBlack(){
  grid.addEventListener('mouseover', (e) => {
    if(e.target !== grid){
      e.target.style.background = 'black';
    }
  })
}
function colorUnitGrey(){
  grid.addEventListener('mouseover', (e) => {
    if(e.target !== grid){
      e.target.style.background = 'grey';
    }
  })
}

function eraseColor(){
  grid.addEventListener('mouseover', (e) => {
    if(e.target !== grid){
      e.target.style.background = 'white';
    }
  })
}

function randomizeColor() {
  let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
  return randomColor;
}


function randomColorUnit(){
  grid.addEventListener('mouseover', (e) => {
    if(e.target !== grid){
      e.target.style.background = randomizeColor();
    }
  })
}

randomColorButton.addEventListener('click', randomColorUnit)
eraserButton.addEventListener('click', eraseColor);
greyButton.addEventListener('click', colorUnitGrey);
blackButton.addEventListener('click', colorUnitBlack);
updateButton.addEventListener('click', setGridSize);



