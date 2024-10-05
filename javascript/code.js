let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = ()=> {
    sections.forEach (sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let  height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks=forEach(links => {
                links.classList.remove('active');
                document.querySelector('.header nav a[href*=' + id +']').classList.add('active');

            });
        };
    });

    let header = document.querySelector('.header');

    header.classList.toggle('sticky', window.scrollY > 100);

    menubar.classList.remove('fa fa-times');
    navbar.classList.remove('active');
};

function showMore(){
    const about = document.querySelector('#about');
    about.style.display = "block"
}

function showeb(){
    const web = document.querySelector('#web');
    web.style.display = "block"
}

let web = document.getElementById('web')
let btn1 = document.getElementById('btn1')
web.addEventListener('mouseover',()=>{
    btn1.style.display='block'
})   
 web.addEventListener('mouseout',()=>{
    btn1.style.display='none'
})

// function showAbout(){
//     const about1= document.querySelector('.about-section');
//     about1.style.scrollY
// }

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    dilay: 200
});

ScrollReveal().reveal('.home-content,.heading',{origin: 'top'});
ScrollReveal().reveal('.home-section img, .services-container, .portfolio-box, .contact-section form',{ origin: 'bottom'})


function showSidenav(){
    const sidemenu = document.querySelector('.nav1')
    sidemenu.style.visibility ="visible"
}

function showMain(){
    const menubar = document.querySelector('.nav1')
    menubar.style.display="none";
}

function saveInfo(){
    const name  = document.getElementById('name')
    const email = document.getElementById('email')
    const phone  = document.getElementById('phone')
    const project = document.getElementById('project')


}