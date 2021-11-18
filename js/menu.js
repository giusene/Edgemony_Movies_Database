export const menu = (data) => {
    const holder = {};
    data.forEach((element) => {
        if (holder.hasOwnProperty(element.genre)) {
            holder[element.genre] = holder[element.genre] + element.genre;
        } else {
            holder[element.genre] = element.genre;
        }
    });

    const allGen = [];

    for (let prop in holder) {
        allGen.push(prop);
    }

    const hamburger = document.querySelector('.hamburger');
    const sidebar = document.querySelector('.sidebar');

    hamburger.addEventListener('click', ()=>{
        sidebar.classList.add('show')
    })


    const sideMenu = document.querySelector('.menu');
    sideMenu.innerHTML = `<li><a href="" class="active">Tutti</a></li>`;
    
    
    allGen.forEach(element => {
        const menuLi = document.createElement('li');
        menuLi.innerHTML = `<a href="#genre-${element}">${element}</a>`
        sideMenu.appendChild(menuLi);
        menuLi.addEventListener('click', () => {
            const menuA = sideMenu.querySelectorAll('a')
            menuA.forEach( (menuEl) =>{
                menuEl.classList.remove('active');
            })
            menuLi.firstChild.classList.add('active');
            sidebar.classList.toggle('show');
        })
    })
}