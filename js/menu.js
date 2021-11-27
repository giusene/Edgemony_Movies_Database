export const menu = (data) => {
    const holder = {};
    data.forEach((element) => {
        element.genres.forEach((item) => {
            if (holder.hasOwnProperty(item.item)) {
                holder[item] = holder[item] + item;
            } else {
                holder[item] = item;
            }
        })
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
    sideMenu.innerHTML = `<li><a href="" class="active">ALL</a></li>`;
    
    
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