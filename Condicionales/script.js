// function aleatorio(){
//     let numero=Math.random();
//     if (numero <=.5){
//         document.writeln(numero + 'Menor que 0.5');

//     }
//     else{
//         document.writeIn(numero + 'Nayor que 0.5');
//     }
// }
// function edad(){
//     let edadP=document.getElementById("edadP").value;
//     let resultadoDiv=document.getElementById("resultadoDiv");
//     if (edadP <=17){
//         resultadoDiv.textContent='menor edad ' + edadP;
//     } else{
//         resultadoDiv.textContent='mayor edad ' + edadP; 
//     }
// }
// document.getElementById("resultadoDiv").innerHTML=">Hola," + edad; otra forma de mostrar el resultado
// const edadP = 18;

/*function edad() {
    let edadP= document.getElementById("edadP").value;
    let resultadoDiv= document.getElementById("resultadoEdad");
    
    if (edadP < 18) {
        resultadoDiv.textContent="Alice es menor de 18 años."
     
      } else if (edadP >= 18 && edadP <= 21) {
        resultadoDiv.textContent="Alice tiene entre 18 y 21 años de edad."
     
      } else { 
        resultadoDiv.textContent="Alice tiene mas de 21 años."
     
      }
    }
      */
    function mostrarFigura() {
        const valor = document.getElementById("figura").value;
        const resultado = document.getElementById("resultado");
        const imagen = document.getElementById("imagen");
  
        if (valor === "0") {
          resultado.textContent = "Círculo";
          imagen.src = "circulo.jpg";
          imagen.style.display = "block";
        } else {
          if (valor === "3") {
            resultado.textContent = "Triángulo";
            imagen.src ="figuras/triangulo.jpg";
            imagen.hidden = "false";
          } else {
            if (valor === "4") {
              resultado.textContent = "Cuadrado";
              imagen.src = "figuras/cuadrado.jpg";
              imagen.style.display = "block";
            } else {
              if (valor === "5") {
                resultado.textContent = "Pentágono";
                imagen.src = "figuras/pentagono.png" ;
                imagen.style.display = "block";
              } else {
                resultado.textContent = "Selecciona una opción válida.";
                imagen.style.display = "none";
              }
            }
          }
        }
      }