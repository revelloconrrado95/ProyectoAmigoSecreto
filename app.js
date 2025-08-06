let amigos = [];

function agregarAmigo() {
    const inputAmigo = document.querySelector("#amigo");
    const nombreAmigo = inputAmigo.value.trim();
    
    // Validar entrada: si el campo está vacío, mostrar alerta
    if(nombreAmigo === "") {
        alert("Por favor, inserte un nombre válido");
        return;
    }
    
    // Agregar nombre a la lista
    amigos.push(nombreAmigo);
    inputAmigo.value = "";
    
    // Visualizar la lista actualizada
    actualizarLista();
}

function actualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    
    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if(amigos.length === 0) {
        alert("No hay amigos para sortear. Agrega al menos uno");
        return;
    }
    
    // Sorteo aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    
    // Mostrar resultado en la página
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>El amigo secreto sorteado es: <strong>${amigoSorteado}</strong></li>`;
}