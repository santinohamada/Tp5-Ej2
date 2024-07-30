/*Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:


esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.


*/
let Mensaje = document.createElement("p");
class Persona {
  constructor(nombre, edad, sexo, peso, altura, AnioNac) {
    this.nombre = nombre;
    this.edad = edad;
    if (peso > 0) {
      this.peso = peso;
    } else {
      Mensaje.innerHTML += "No ingresó un peso valido<br>";
    }

    if (altura > 0) {
      this.altura = altura;
    } else {
      Mensaje.innerHTML += `

          No ingresó una altura valida<br>`;
    }
    switch (sexo) {
      case "M":
        this.sexo = sexo;
        break;
      case "H":
        this.sexo = sexo;
        break;

      default:
        Mensaje.innerHTML += "No ingresó un sexo valido.<br>";
    }

    if (AnioNac >= 1930 && AnioNac <= 2010) {
      this.AnioNac = AnioNac;
    } else {
      Mensaje.innerHTML += "No ingresó una fecha valida<br>";
    }
    document.querySelector("main").appendChild(Mensaje);

    this.dni = Math.floor(10000000 + Math.random() * 90000000);
  }

  esMayorDeEdad() {
    if (
      this.edad == "" ||
      typeof this.edad == undefined ||
      typeof this.edad == null
    ) {
      return;
    }
    if (this.edad >= 18) {
      Mensaje.innerHTML = "La persona es mayor de edad";
      document.querySelector("main").appendChild(Mensaje);
    } else {
      Mensaje.innerHTML = "La persona es menor de edad";
      document.querySelector("main").appendChild(Mensaje);
    }
  }

  mostrarGeneracion() {
    switch (true) {
      case 1994 <= this.AnioNac && this.AnioNac <= 2010:
        Mensaje.innerHTML = `<p> ${this.nombre} pertenece a la Generación Z y su rasgo característico es Irreverencia. </p>`;
        document.querySelector("main").appendChild(Mensaje);
        break;
      case 1981 <= this.AnioNac && this.AnioNac <= 1993:
        Mensaje.innerHTML = `<p> ${this.nombre} pertenece a la Generación Y (Millennials) y su rasgo característico es Frustración. </p>`;
        document.querySelector("main").appendChild(Mensaje);
        break;
      case 1969 <= this.AnioNac && this.AnioNac <= 1980:
        Mensaje.innerHTML = `<p> ${this.nombre} pertenece a la Generación X y su rasgo característico es Obsesión por el éxito. </p>`;
        document.querySelector("main").appendChild(Mensaje);
        break;
      case 1949 <= this.AnioNac && this.AnioNac <= 1968:
        Mensaje.innerHTML = `<p> ${this.nombre} pertenece a la Baby Boom y su rasgo característico es Ambición.</p>`;
        document.querySelector("main").appendChild(Mensaje);
        break;
      case 1930 <= this.AnioNac && this.AnioNac <= 1948:
        Mensaje.innerHTML = `<p> ${this.nombre} pertenece a la Silent Generation y su rasgo característico es Austeridad.</p>`;
        document.querySelector("main").appendChild(Mensaje);
        break;
      default:
        Mensaje.innerHTML = `<p> ${this.nombre} pertenece a una Generación desconocida y su rasgo característico es Rasgo desconocido.</p>`;
        document.querySelector("main").appendChild(Mensaje);
    }
  }
}
const formulario = document.querySelector("form");
formulario.addEventListener("submit", function (e) {
  e.preventDefault();
});
const mostrarGeneracionn = document.querySelector("#mostrarGeneracion");
const mayorEdad = document.querySelector("#mayorDeEdad");
mostrarGeneracionn.addEventListener("click", () => {
  let persona1 = crearPersona();
  persona1.mostrarGeneracion();
});
mayorEdad.addEventListener("click", () => {
  let persona1 = crearPersona();
  persona1.esMayorDeEdad();
});

function crearPersona() {
  return new Persona(
    document.querySelector("#nombre").value,
    document.querySelector("#edad").value,
    document.querySelector("#sexo").value,
    document.querySelector("#peso").value,
    document.querySelector("#altura").value,
    document.querySelector("#AnioNac").value
  );
}
