// ******************** Sticky Navigation ****************** /

const obs = new IntersectionObserver(
    function(entries) {
        const ent = entries[0];

        if(ent.isIntersecting === false) {
            document.body.classList.add('sticky');
        }

        if(ent.isIntersecting === true) {
            document.body.classList.remove('sticky');
        }
    }, 
    {
        root: null,
        threshold: 0,
        rootMargin: "-80px"
    }
);

const sectionHeroEl = document.querySelector('.section-hero');

obs.observe(sectionHeroEl);


// ******************** Copyright Date ****************** /

const yearEl = document.querySelector(".year");

const date = new Date().getFullYear();

yearEl.textContent = date;

// ******************** Mobile Navigation ****************** /

const btnNavEl = document.querySelector(".btn-mobile-nav");

const headerEl = document.querySelector(".header");

btnNavEl.addEventListener('click', function() {

    // headerEl.classList.add('nav-open');

    // headerEl.classList.remove('nav-open');

    headerEl.classList.toggle('nav-open');

})

const alllinks = document.querySelectorAll(".main-nav-link");

alllinks.forEach(function(linkEl) {
    linkEl.addEventListener('click', function(){
        headerEl.classList.toggle('nav-open');
    })
})
    