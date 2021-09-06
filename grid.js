let position = 1; // The starting position of the grid
const gridSize = 100; // The total number of the grid cells

function createGrid() {
  // Should create a new Div based on the gridSize variable value and append these divs to the element with id "target"
  for (i=0; i<gridSize;i++){
    
    // Establezco y creo el contenido del texto
    let newContent = document.createTextNode(position + i);
    
    // Creo una nuevo elemento DIV
    let newDiv = document.createElement("div");
    
    // Le asigno un atributo ID usando el nombre generado automaticamente
    let divID = "n" + (position+i);
    newDiv.setAttribute('id', divID);
    
    // Agrego el contenido al nuevo DIV creado
    newDiv.appendChild(newContent);

    // Agrego el DIV creado al Target dentro del DOM
    document.getElementById("target").appendChild(newDiv);
  }

}

function move() {
    // Should increment the position variable by 1 each 100ms taking into consideration the gridSize variable value
    // This function should make use of the toggle function below to change the CSS class on a specific div element
    toggle(position);
    position++;

    setTimeout(()=>{
    move();
    }, 100)
}

function toggle(position) {
  // Takes a position parameter referencing a grid cell and sets the class name of that cell (or div) to the class 'on'
  // The CSS class "on" is defined in the styles.css file
  // If a position of less than 1 is passed into the function, return 0 as the grid positions only go from 1 to 100
  
  // Salimos de la función si el valor es diiferente a 1-100
  if (position <= 0 || position > gridSize){
    return 0
  }

  // Nombre del DIV que vamos a controlar
  let divName = "n"+position;
  
  // Verificamos que el DIV actual sea mayor a 1
  if (position > 1){
    // Nombre del DIV previo
    let prevDivName = "n" + (position - 1);
    
    // Retiramos la clase .on del div anterior
    document.getElementById(prevDivName).classList.toggle("on");
    
    // Colocamos la clase .on al div actual
    document.getElementById(divName).classList.toggle("on");

  }else{
    // Si el DIV actual es 1 no se retira la clase del DIV anterioor porque no existe
    document.getElementById(divName).classList.toggle("on");
  }
}

//don't change this line
if (typeof module !== 'undefined') {
  module.exports = { createGrid, move, toggle };
}
