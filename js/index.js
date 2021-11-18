import { API } from './utils.js';
import { List } from './list.js';
import { Add } from './add.js';
import { View } from './view.js';
import { Edit } from './edit.js';
import { menu } from './menu.js';
import { filterGen } from './genre.js';
import { searchFunc } from './search.js';
import { searchModal } from './search.js';

const loadList = () => {
    fetch(API)
        .then((response) => {
            // GESTIRE GLI ERRORI
            if (response.status === 404) {
                console.error('errore!!!');
                document.querySelector('.alert').classList.add('show')
            } else {
                return response.json()
            }
        })
        .then((data) => {
            List(data);
            menu(data);
            dataTemp = data;
            searchFunc(dataTemp)
        })
}

document.addEventListener('DOMContentLoaded', () => {
    loadList();
    searchModal();
}
)

const sidebar = document.querySelector('.sidebar');

window.addEventListener('hashchange', () => {
    const destination = location.hash.split('-')[0];
    switch (destination) {
        case '#add':
            Add();
            sidebar.classList.toggle('show');
            break;
        case '#view':
            View(parseInt(location.hash.split('-')[1]));
            break;
        case '#edit':
            Edit(parseInt(location.hash.split('-')[1]));
            break;
        case '#genre':
            filterGen(location.hash.split('-')[1], dataTemp);
            break;
        case '':
            loadList();
            break;
    }
})


let dataTemp = [];


