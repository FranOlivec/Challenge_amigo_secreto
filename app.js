let amigos = []; // Declaramos un array vacío que almacenará los nombres de los amigos

function agregarAmigo() {
    let input = document.getElementById("amigo"); // Capturamos el elemento del DOM con id 'amigo' (input de texto)
    let nombre = input.value.trim();  /* Utilizamos input.value para obtener el valor del campo de texto y luego aplicamos el método trim() 
    para eliminar los espacios al inicio y al final del nombre ingresado, evitando entradas con espacios innecesarios.*/

    if (nombre === "") { // Verificamos que el nombre no esté vacío
        alert("Por favor, inserte un nombre."); // Si está vacío, mostramos una alerta
        return; // Salimos de la función si el campo está vacío
    }

    amigos.push(nombre); // Añadimos el nombre ingresado al array 'amigos'
    input.value = ""; // Limpiamos el campo de texto para que esté listo para un nuevo nombre
    actualizarLista(); // Llamamos a la función actualizarLista para que actualice la lista visual de amigos
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos"); // Capturamos el elemento del DOM con id 'listaAmigos' (la lista desordenada 'ul')
    lista.innerHTML = ""; // Limpiamos el contenido actual de la lista para poder actualizarla

    amigos.forEach((amigo) => { // Iteramos sobre cada amigo en el array 'amigos'
        let li = document.createElement("li"); // Creamos un nuevo elemento de lista <li> para cada amigo
        li.textContent = amigo; // Asignamos el nombre del amigo como contenido del <li>
        lista.appendChild(li); // Añadimos el nuevo <li> a la lista
    });
}

function sortearAmigo() {
    if (amigos.length < 2) { // Verificamos si hay al menos dos amigos para poder hacer el sorteo
        alert("Debe haber al menos dos amigos para sortear."); // Si no, mostramos un mensaje de alerta
        return; // Salimos de la función si hay menos de dos amigos
    }

    let copiaAmigos = [...amigos]; // Creamos una copia del array 'amigos' para no modificar el original
    let resultado = []; // Inicializamos un array vacío para almacenar el resultado del sorteo

    while (copiaAmigos.length > 0) { // Mientras haya amigos en la lista temporal
        let indice = Math.floor(Math.random() * copiaAmigos.length); // Generamos un índice aleatorio entre 0 y el tamaño de la lista
        let elegido = copiaAmigos.splice(indice, 1)[0]; // Extraemos un amigo aleatorio de la lista temporal y lo almacenamos en 'elegido'
        resultado.push(elegido); // Agregamos el amigo elegido al array 'resultado'
    }

    let listaResultado = document.getElementById("resultado"); // Capturamos el elemento del DOM donde mostraremos el resultado
    listaResultado.innerHTML = ""; // Limpiamos cualquier contenido previo del resultado

    for (let i = 0; i < resultado.length; i++) { // Iteramos sobre el array 'resultado' para mostrar el sorteo
        let li = document.createElement("li"); // Creamos un nuevo elemento de lista <li>
        let siguiente = resultado[(i + 1) % resultado.length]; // Calculamos el siguiente amigo (usamos el operador % para volver al principio si es necesario)
        li.textContent = `${resultado[i]} → ${siguiente}`; // Mostramos la relación entre el amigo actual y el siguiente
        listaResultado.appendChild(li); // Agregamos el nuevo <li> al elemento de la lista
    }
}
