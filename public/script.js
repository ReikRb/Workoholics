// La función menu es utilizada para el desglose  del "burger menu", 
// cambiar la imagen del logo a una versión en blanco y 
// editar  una posición de la taza. 
// Todo esto para la versión movil.
function menu() {
  let x = document.getElementById("links");
  let y = document.getElementById("logo")
  let menu = document.getElementById("menu")
  let mug = document.getElementById("mug")
  if (x.style.display === "block") {
    x.style.display = "none";
    x.style.transition = "5s"
    y.src = "./00_Recursos/logo.png"
    menu.style.backgroundColor = "white"
    mug.style.top = "20%"


  } else {
    x.style.display = "block";
    x.style.backgroundColor = "#c00066"
    y.src = "./00_Recursos/logo_white.png"
    menu.style.backgroundColor = "#fc088c"
    mug.style.top = "39%"
  }


  // La función changeColour cambia la imagen del producto
  // a su versión en negro a traves de los parametros: 
  // element(el producto en cuestion),
  // colour(el colordel boton que se clicka y al que se desea cambiar).

}
function changeColour(element, colour) {
  let color = document.getElementById(`${element}${colour}`)
  let img = document.getElementById(`${element}Img`)

  if (color.id === `${element}Black`) {
    img.src = `./00_Recursos/${element}2.png`
  }
  else {
    img.src = `./00_Recursos/${element}1.png`
  }
}