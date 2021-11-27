import { render } from "./utils.js";
import { API } from "./utils.js"
const List = (data) => {
    const elements = data.map(
        (item) => `<li>
        <img src="${item.poster}" />
        <div class="overlay">
        <a href="#view-${item.id}">${item.title}</a>
        <p>${item.genres}</p>
        <p>${item.year}</p>
        </div>
        <div class="edit_btn">
        <a class="edit" href="#edit-${item.id}"></a>
        <button class="delete" id="${item.id}"></button>
        </div>
        </li>`)
    .join('');

    const container = document.querySelector('#container');
    render(container, `
    <ul class="list-ul">${elements}</ul>`);

    const btns = [...document.querySelectorAll('.delete')];
    btns.forEach(btn => {
        btn.addEventListener('click', (event) => {
            const id = parseInt(event.target.id);
            const filtered = data.filter( (movie) => movie.id !== id );
            //possiamo subito renderizzare List con la lista filtrata
            // dall'id che abbiamo appena eliminato
            // potremmo creare uno stato intermedio ed aspettare
            // la risposta del server 
            List(filtered);


            fetch(`${API}/${id}`, { method: 'DELETE' })
                .then(response => response.json())
                //oppure mandarlo alla risponsta del server
                .then(() => List(filtered));
        }, {once: true})
    })
}

export { List };