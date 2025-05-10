const menu = document.querySelector('#mobile-menu')
    const menuLinks = document.querySelector('.navbar__menu')
    const navLogo = document.querySelector('#navbar_logo')

    //display Mobile Menu
    const mobileMenu = ( ) =>{
      menu.classList.toggle('is-active');
      menuLinks.classList.toggle('active');
    };

    menu.addEventListener('click', mobileMenu);

    //show active menu while scrolling
    const highlightMenu = () =>{
      const elem= document.querySelector('.highlight');
      const homeMenu= document.querySelector('#home-page');
      const menuMenu= document.querySelector('#menu-page');
      const aboutMenu= document.querySelector('#about-page');
      const mopMenu= document.querySelector('#mop-page');
      const reviewMenu= document.querySelector('#review-page');
      const contactMenu= document.querySelector('#contact-page');
      let scrollPos= window.scrollY

      //adds 'highlights' class to my menu items
    if(window.innerWidth> 960 & scrollPos < 600){
        homeMenu.classList.add('highlight');
      aboutMenu.classList.add('highlight');
      return;
    } else if(window.innerWidth > 960 && scrollPos < 1400){
      aboutMenu.classList.add('Highlight');
      homeMenu.classList.remove('highlight'); 
      serviceMenu.classList.remove('Highlight');
      return;
    } else if(window.innerWidth > 960 && scrollPos < 2345){
    serviceMenu.classList.add('Highlight');
    aboutMenu.classList.remove('highlight');
    return;
  }
  
  if ((elem && window.innerWidth < 960  && scrollPos < 600) || elem) {
    elem.classList.remove('highlight');
  }
};
  window.addEventListener('scroll', highlightMenu);
  window.addEventListener('click', highlightMenu);

  const hideMobileMenu = () =>{
    const menuBars= document.querySelector('.is-active');
    if (window.innerWidth <= 768 && menuBars){
      menu.classList.toggle('is-active');
      menuLinks.classList.remove('active');
    }
  };

  menuLinks.addEventListener('click',hideMobileMenu);
  navLogo.addEventListener('click', hideMobileMenu);