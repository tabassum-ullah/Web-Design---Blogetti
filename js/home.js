$(document).ready(function(){
    $('.items').slick({
    infinite: true,
    lazyLoad: 'ondemand',
    slidesToShow: 3,
    slidesToScroll: 3
    });
});

function navbar(el = 'main_navbar', options){
    let defaultOption  ={
}

options = {...defaultOption, ...options }


var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.iOS() || isMobile.Windows());
    }
};

this.init = function(){
    var dropdowns = document.getElementById(el).getElementsByClassName("dropdown");
    console.log(dropdowns);
    for (var i = 0; i < dropdowns.length; i++) {
        var dropdown = dropdowns.item(i);
        dropdown.addEventListener("mouseover", function(){
            this.classList.add('show');
            this.getElementsByClassName("dropdown-menu")[0].classList.add('show');
        });
        dropdown.addEventListener("mouseout", function(){
            this.classList.remove('show');
            this.getElementsByClassName("dropdown-menu")[0].classList.remove('show');
        });
    }
    
}

this.init();    
}