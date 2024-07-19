jQuery('.accordion').on('click', function(){
   jQuery(this).find(".accordion--content").slideToggle();
});

jQuery('.expand-all-button').on('click', function(){
    var panels = jQuery('.accordion--content');
    var isOpen = panels.first().is(':visible');

    if (isOpen) {
      panels.slideUp();
    } else {
      panels.slideDown();
    }
});

/**
 * JS Version example
*/

// const expandAll = document.getElementsByClassName('expand-all-button')
// const accordion = document.querySelector('.accordion');

// expandAll[0].addEventListener("click", function () {
//   if( accordion.classList.contains('active') ) {
//     document.querySelectorAll('.accordion').forEach(node => node.classList.remove('active'))  
//     document.querySelectorAll('.accordion--content').forEach(node => node.style.display='none')
//   }else{
//     document.querySelectorAll('.accordion--content').forEach(node => node.style.display='block')
//     document.querySelectorAll('.accordion').forEach(node => node.classList.add('active'))
//   }
// })