/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
// const sections = document.querySelectorAll('section[id]')

// function scrollActive(){
//     const scrollY = window.pageYOffset

//     sections.forEach(current =>{
//         const sectionHeight = current.offsetHeight
//         const sectionTop = current.offsetTop - 50;
//         sectionId = current.getAttribute('id')

//         // if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
//         //     document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
//         // }else{
//         //     document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
//         // }
//     })
// }
// window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    reset: true
});

sr.reveal('.home__data, .about__img, .education__subtitle, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .timeline-dot, .timeline-items, .timeline-item, .contact__input',{interval: 200});

/*======= SCROLL TOP ======*/
const scrolltop = document.querySelector(".scrolltop");
            
            window.addEventListener("scroll", () => {
                
                if (window.pageYOffset > 100) {
                    scrolltop.classList.add("active");
                } else {
                    scrolltop.classList.remove("active");
                }
            })

/*===== Mengirim data ke Google Apps Script =====*/
        const scriptURL = 'https://script.google.com/macros/s/AKfycbyMsAkuPKPLVNncz_OjxUyAvPTD4OXhUf5dvIt169eprkvTSKmcddXkBahO1OclYv_2/exec'
        const form = document.forms['kontak-form']
        const btnKirim = document.querySelector('.btn-kirim');
        const btnLoading = document.querySelector('.btn-loading');
        const btnAlert = document.querySelector('.my-alert');

        form.addEventListener('submit', e => {
            e.preventDefault();
            //ketika tombol submit di klik
            //tampilkan tombol loading, hilangkan tombol kirim
            btnLoading.classList.toggle('d-none');
            btnKirim.classList.toggle('d-none');

            fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => {
                    //tampilkan tombol kirim, hilangkan tombol loading
                    btnLoading.classList.toggle('d-none');
                    btnKirim.classList.toggle('d-none');
                    //tampilkan alert
                    btnAlert.classList.toggle('d-none');
                    //reset form-nya
                    form.reset();
                    console.log('Success!', response)
                })                 
                .catch(error => console.error('Error!', error.message))
        })