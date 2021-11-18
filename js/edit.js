import { render, API } from './utils.js';

export const Edit = (id = 0) => {
    fetch(`${API}/${id}`)
    .then(response => response.json())
    .then((movie) => {
        const container = document.querySelector('#container');
        render(container, `<div>
        <h3>Modifica scheda</h3>
        <form id="edit">
            <div class="row">
                <label for="title">Titolo:</label>
                <input type="text" id="title" name="title" value="${movie.title}" />
            </div>
            <div class="row">
                <label for="poster">Poster:</label>
                <input type="text" id="poster" name="poster"  value="${movie.poster}"/>
            </div>
            <div class="row">
                <label for="year">Anno:</label>
                <input type="number" min="1900" id="year" name="year"  value="${movie.year}" />
            </div>
            <div class="row">
            <label for="gen">Genere:</label>
            <input id="gen" name="gen" />
        </div>
            <div class="row">
                <label for="description">Trama:</label>
                <textarea id="description" name="description"  />${movie.description}</textarea>
            </div>
    
            <button class="button">Aggiorna Scheda</button>
        </form>
        <a class="backbutton" href="#" id="back"><</a>
        </div>`);

        
        const form = document.querySelector('#edit');
        
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const UpdatedMovie = {
                title: event.target.title.value,
                poster: event.target.poster.value,
                genre: event.target.gen.value,
                year: parseInt(event.target.year.value),
                description: event.target.description.value   
            };
            
            // PUT E PATCH PER LA MODIFICA DI UN OGGETTO ESISTENTE
            // PUT: SOVRASCRIVE TUTTO L'OGGETTO
            // PATCH: SOLO UNA PARTE
            // endpoint deve indicare anche l'id della risorsa

            fetch(`${API}/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(UpdatedMovie)
            })
            .then((response) => response.json())
            .then(() => (location.hash = ''));
        })
    })
}