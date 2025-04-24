function mostrarFigura() {
    const valor = document.getElementById("figura").value;
    const resultado = document.getElementById("resultado");
    const imagen = document.getElementById("imagen");
  
    switch (valor) {
      case "0":
        resultado.textContent = "Círculo";
        imagen.src = "Figuras/circulo.jpg";
        imagen.style.display = "block";
        break;
      case "3":
        resultado.textContent = "Triángulo";
        imagen.src = "Figuras/triangulo.jpg";
        imagen.style.display = "block";
        break;
      case "4":
        resultado.textContent = "Cuadrado";
        imagen.src = "Figuras/cuadrado.jpg";
        imagen.style.display = "block";
        break;
      case "5":
        resultado.textContent = "Pentágono";
        imagen.src = "Figuras/pentagono.png";
        imagen.style.display = "block";
        break;

    }
  }