import { List } from './list.js';

export function searchFunc(data) {
    const input = document.querySelector('#search')
    const searchForm = document.querySelector('#search-form');
    const searchModal = document.querySelector('.search_modal')

    searchForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const inputValue = input.value.toLocaleLowerCase();
        const result = data.filter((item) => {
            return item.title.toLocaleLowerCase().search(inputValue) > -1
        });
        
        List(result);
        
        searchModal.classList.remove('show');
    })

    input.addEventListener('keyup', () =>{
        const inputValue = input.value.toLocaleLowerCase();
        const result = data.filter((item) => item.title.toLocaleLowerCase().search(inputValue) > 1);
        List(result);
    })

}

export function searchModal() {
    const searchForm = document.querySelector('#search-form');
    const searchModal = document.querySelector('.search_modal');
    const searchBtn = document.querySelector('.search_btn');
    const input = document.querySelector('#search')

    
    
    searchBtn.addEventListener('click', () => {
        input.focus();
        searchForm.reset();
        searchModal.classList.toggle('show');
    })

    input.addEventListener('blur', () => {
        searchModal.classList.toggle('show');
    })

}

