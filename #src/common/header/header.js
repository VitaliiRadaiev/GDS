let header = document.querySelector('[data-header]');
let mobMenu = document.querySelector('[data-mob-menu]');

if (header) {
    window.addEventListener('scroll', () => {
        header.classList.toggle('header--is-scroll', window.pageYOffset > 50);
    })
}

if (mobMenu) {
    let openMobMenuButtons = document.querySelectorAll('[data-action="open-mob-menu"]');
    let closeMobMenuButtons = document.querySelectorAll('[data-action="close-mob-menu"]');

    if(openMobMenuButtons.length) {

        openMobMenuButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();

                mobMenu.classList.add('mobile-menu--open');
                document.body.classList.add('overflow-hidden');
            })
        })
        
    }
    if(closeMobMenuButtons.length) {

        closeMobMenuButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                mobMenu.classList.remove('mobile-menu--open');
                document.body.classList.remove('overflow-hidden');
            })
        })
        
    }


}

