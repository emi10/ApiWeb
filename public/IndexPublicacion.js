const listaPublicaciones = document.querySelector("#publicaciones");
let URL = "http://localhost:8080/post/";

for (let i = 1; i <= 100; i++) {
    fetch(URL + i)
    .then((response) => {
        if (response.ok) {
            return response.json();
        }
        throw new Error('Falló la carga de la publicación: ' + response.statusText);
    })
    .then(data => VerPublicaciones(data))
    .catch(error => console.error('Error al cargar la publicación:', error));
}

function VerPublicaciones(post) {
    const div = document.createElement("div");
    div.classList.add("publicacion");
    div.innerHTML = `
    <div class="texto">
        <p>${post.body || 'Texto no disponible'}</p> 
    </div>
    <div class="interacciones">
        <button class="like-btn">Me gusta</button>
        <input type="text" placeholder="Añade un comentario...">
    </div>
    `;
    listaPublicaciones.append(div);
}

