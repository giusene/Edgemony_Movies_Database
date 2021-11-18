import { render, API } from './utils.js';

export const View = (id = 0) => {
    fetch(`${API}/${id}`)
        .then(response => response.json())
        .then((movie) => {
            const container = document.querySelector('#container');

            render(container, `<article>
            <div class="poster"><img src="${movie.poster}" /></div>
            <div class="description">
            <h2>${movie.title}</h2>
            <p>${movie.genre}</p>
            <p>${movie.year}</p>
            <p>${movie.description}</p>
            <div>
            <a class="backbutton" href="#" id="back"><</a>
            </article>`);
        })
}