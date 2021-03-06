import { render, API } from './utils.js';

export const Edit = (id = 0) => {
    fetch(`${API}/${id}`)
    .then(response => response.json())
    .then((movie) => {
        const container = document.querySelector('#container');
        render(container, `<div>
        <h3>Edit movie record</h3>
        <form id="edit">
            <div class="row">
                <label for="title">Title:</label>
                <input type="text" id="title" name="title" value="${movie.title}" required />
            </div>
            <div class="row">
                <label for="poster">Poster:</label>
                <input type="text" id="poster" name="poster"  value="${movie.poster}"/>
            </div>
            <div class="row">
                <label for="year">Year:</label>
                <input type="number" min="1900" id="year" name="year"  value="${movie.year}" required />
            </div>
            <div class="row">
            <label for="gen">Genres (comma separated):</label>
            <input id="gen" name="gen" value="${movie.genres}" placeholder="ex: comedy, action" required />
        </div>
            <div class="row">
                <label for="description">Desc:</label>
                <textarea id="description" name="description"/>${movie.description}</textarea>
            </div>
    
            <button class="button">Update</button>
        </form>
        <a class="backbutton" href="#" id="back"><</a>
        </div>`);

        
        const form = document.querySelector('#edit');
        
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const genres = event.target.gen.value.split(',');
            const UpdatedMovie = {
                title: event.target.title.value,
                poster: event.target.poster.value,
                genres: genres,
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