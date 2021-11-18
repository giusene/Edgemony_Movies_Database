import { render, API } from './utils.js'

const Add = () => {
    const container = document.querySelector('#container');
    const today = new Date()

    render(container, `<div class="form">
    <h3>Aggiungi una nuova scheda</h3>
    <form id="create">
        <div class="row">
            <label for="title">Titolo:</label>
            <input type="text" id="title" name="title" />
        </div>
        <div class="row">
            <label for="poster">Poster:</label>
            <input type="text" id="poster" name="poster" />
        </div>
        <div class="row">
            <label for="year">Anno:</label>
            <input type="number" min="1900" value="${today.getFullYear()}" id="year" name="year" />
        </div>
        <div class="row">
            <label for="gen">Genere:</label>
            <input id="gen" name="gen" />
        </div>
        <div class="row">
            <label for="description">Trama:</label>
            <textarea id="description" name="description" /></textarea>
        </div>

        <button class="button">Salva Scheda</button>
    </form>
    <a class="backbutton" href="#" id="back"><</a>
    </div>`);

    const form = document.querySelector('#create');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const movie = {
            title: event.target.title.value,
            poster: event.target.poster.value,
            genre: event.target.gen.value,
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