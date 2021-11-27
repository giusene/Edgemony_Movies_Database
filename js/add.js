import { render, API } from './utils.js'

const Add = () => {
    const container = document.querySelector('#container');
    const today = new Date()

    render(container, `<div class="form">
    <h3>Add new movie record</h3>
    <form id="create">
        <div class="row">
            <label for="title">Title:</label>
            <input type="text" id="title" name="title" required />
        </div>
        <div class="row">
            <label for="poster">Poster:</label>
            <input type="text" id="poster" name="poster" />
        </div>
        <div class="row">
            <label for="year">Year:</label>
            <input type="number" min="1900" value="${today.getFullYear()}" id="year" name="year" required />
        </div>
        <div class="row">
            <label for="gen">Genres (comma separated):</label>
            <input id="gen" name="gen" placeholder="ex: comedy, action" required />
        </div>
        <div class="row">
            <label for="description">Desc:</label>
            <textarea id="description" name="description" /></textarea>
        </div>

        <button class="button">Save</button>
    </form>
    <a class="backbutton" href="#" id="back"><</a>
    </div>`);

    const form = document.querySelector('#create');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const genres = event.target.gen.value.split(',')
        const movie = {
            title: event.target.title.value,
            poster: event.target.poster.value,
            genres: genres,
            year: parseInt(event.target.year.value),
            description: event.target.description.value   
        };

        // per fecth il secondo parametro è un oggetto
        // standard è get
        fetch(API, {
            method: "POST",
            // HEADERS (che è un oggetto) contiente informazioni per il server
            headers: {
                // sto inviando un json
                "Content-Type": "application/json"
            },
            // BODY è cosa vuoi inviare... nel nostro caso l'oggetto movie
            // lo trasformiamo in json
            body: JSON.stringify(movie)
        })
        .then((response) => response.json())
        .then(() => (location.hash = ''));
    })
}

export { Add }