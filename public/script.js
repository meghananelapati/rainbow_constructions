window.addEventListener('scroll', function() {
    var menu = document.getElementById('menu');
    var rainbowpic = document.getElementById('rainbowpic'); 
    var scrollPosition = window.scrollY;
    var windowWidth = window.innerWidth;
    if (scrollPosition > 80 && windowWidth > 705) {
        menu.style.height = '10%';
        rainbowpic.src = 'rainbowprojpics/rainbowpic-small.png';
        rainbowpic.style.cursor='pointer';
        rainbowpic.style.height='10%';
    } else {
        menu.style.height = '12%';
        rainbowpic.src = 'rainbowprojpics/rainbowpic.png';
        rainbowpic.style.height='12%';
    }
});
window.addEventListener('DOMContentLoaded', function() {
    var menu = document.getElementById('main-menu');
    var ham = document.querySelector('.hamburger-menu'); 
    function toggleMenu() {
        var windowWidth = window.innerWidth;
        if (windowWidth < 705) {
            menu.style.display = 'none';
            ham.style.display = 'block';
        } else {
            menu.style.display = 'block';
            ham.style.display = 'none';
        }
    }
    toggleMenu();
    // Toggle menu on window resize
    window.addEventListener('resize', toggleMenu);
});

document.addEventListener('DOMContentLoaded', function() {
    var hampic = document.getElementById('hampic');
    var hamMenu = document.querySelector('.ham-menuu');
    var body=document.querySelector('.bodyy');
    hamMenu.style.display = 'none';
    hampic.addEventListener('click', function(event) {
        event.stopPropagation(); 
        if (hamMenu.style.display === 'block') {
            hamMenu.style.display = 'none';
            body.style.position='relative';
        } else {
            hamMenu.style.display = 'block';
            body.style.position='fixed';
        }
    });
    // Hide menu when clicked outside the hamburger menu
    document.addEventListener('click', function(event) {
        var isClickedInsideHamMenu = hamMenu.contains(event.target);
        var isClickedOnHampic = event.target === hampic;

        if (!isClickedInsideHamMenu && !isClickedOnHampic) {
            hamMenu.style.display = 'none';
            body.style.position='relative';
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    var hamburger = document.querySelector('.hamburger-menu');
    var menu = document.querySelector('.menu');
    var windowWidth = window.innerWidth;
    
    if(windowWidth < 700) {
        menu.style.display = 'none';
        hamburger.style.display = 'block'; 
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const apartmentsonsaleLink = document.getElementById('ham-home');
    apartmentsonsaleLink.addEventListener('click', function(event) {

        event.preventDefault();
        
        window.location.href = '/';
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const contactUsLink = document.getElementById('contactus');
    contactUsLink.addEventListener('click', function(event) {

        event.preventDefault();
        
        window.location.href = '/contactus';
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const contactUsLink = document.getElementById('ham-contactus');
    contactUsLink.addEventListener('click', function(event) {

        event.preventDefault();
        
        window.location.href = '/contactus';
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const completedprojectsLink = document.getElementById('completedprojects');
    completedprojectsLink.addEventListener('click', function(event) {

        event.preventDefault();
        
        window.location.href = '/completedprojects';
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const hamcompletedprojectsLink = document.getElementById('ham-completedprojects');
    hamcompletedprojectsLink.addEventListener('click', function(event) {

        event.preventDefault();
        
        window.location.href = '/completedprojects';
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const apartmentsonsaleLink = document.getElementById('apartmentsonsale');
    apartmentsonsaleLink.addEventListener('click', function(event) {

        event.preventDefault();
        
        window.location.href = '/apartmentsonsale';
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const apartmentsonsaleLink = document.getElementById('ham-apartmentsonsale');
    apartmentsonsaleLink.addEventListener('click', function(event) {

        event.preventDefault();
        
        window.location.href = '/apartmentsonsale';
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var rainbowpic = document.querySelector('.rainbowpic');
    rainbowpic.addEventListener('click', function(event) {

        event.preventDefault();
        
        window.location.href = '/rainbowconstructions';
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var rainbowpic = document.querySelector('#ham-rainbowpic');
    rainbowpic.addEventListener('click', function(event) {

        event.preventDefault();
        
        window.location.href = '/rainbowconstructions';
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var rainbowpic = document.querySelector('#homepage');
    rainbowpic.addEventListener('click', function(event) {

        event.preventDefault();
        
        window.location.href = '/rainbowconstructions';
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var artpic = document.querySelector('#rampallyproj');
    artpic.addEventListener('click', function(event) {

        event.preventDefault();
        
        window.location.href = '/artlivinghomes';
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var artpic = document.querySelector('#rampallyprojsmall');
    artpic.addEventListener('click', function(event) {

        event.preventDefault();
        
        window.location.href = '/artlivinghomes';
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var brindapic = document.querySelector('#brindaproj');
    brindapic.addEventListener('click', function(event) {

        event.preventDefault();
        
        window.location.href = '/brindavanam';
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var brindapic = document.querySelector('.gobrinda');
    brindapic.addEventListener('click', function(event) {

        event.preventDefault();
        
        window.location.href = '/brindavanam';
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var artpic = document.querySelector('.gokrishna');
    artpic.addEventListener('click', function(event) {

        event.preventDefault();
        
        window.location.href = '/krishnakuteer';
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var artpic = document.querySelector('#krishnaproj');
    artpic.addEventListener('click', function(event) {

        event.preventDefault();
        
        window.location.href = '/krishnakuteer';
    });
});