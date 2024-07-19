document.addEventListener('DOMContentLoaded', function() {

    let menuContainer = document.querySelector('.navigation');
    let menuToggle = menuContainer.querySelector('.menu-button');
    let siteNavigation = menuContainer.querySelector('#top-bar-nav-menu');

    if( menuToggle ) {
        menuToggle.setAttribute('aria-expanded', 'false');  
        siteNavigation.setAttribute('aria-hidden', 'false');

        //Event Listener for main menu toggle button
        menuToggle.addEventListener('click', function(e) {
            e.preventDefault();
            this.classList.toggle('toggled-on');
            siteNavigation.classList.toggle('toggled-on');
            
            let expanded = this.getAttribute('aria-expanded') === 'true' || false;
            this.setAttribute('aria-expanded', !expanded);
            
            siteNavigation.setAttribute('aria-hidden', !expanded);
        });
    }
 
    let megaMenu = document.querySelector('#megamenu-bar');
    window.addEventListener('scroll', function() {
        if ( window.scrollY > 100 ) {
            megaMenu.classList.add('scrolled');
        } else {
            megaMenu.classList.remove('scrolled');
        }
    })

}); // DOMContentLoaded