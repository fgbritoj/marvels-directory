// Menu Button
const menuButton = document.getElementById('menu-button')

menuButton.addEventListener('click', () => {
    const menu = document.querySelector('.header-menu ul')

    menu.classList.toggle('active')
    menuButton.classList.toggle('active')
    console.log(menu)
})

// Header - Active Page
const links = document.querySelectorAll('.header-menu ul li a')

links.forEach(link => {
    if(location.href.includes(link.href)) {
        link.classList.add('activated')
    }
})