const navBar = document.getElementsByClassName(`navHeader`)[0]
const headerImgY = document.getElementsByTagName(`header`)[0].getBoundingClientRect().bottom
window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    if(currentScrollY > headerImgY-55){ navBar.className = `navMain`
    }else navBar.className = `navHeader`
})

const navDirectory = document.getElementsByClassName(`directoryCont`)[0]
const taskBarY = document.getElementsByTagName(`nav`)[0].offsetHeight
const aboutDivY = document.getElementsByClassName(`aboutMe`)[0].getBoundingClientRect().top
const projectDivY = document.getElementsByClassName(`projects`)[0].getBoundingClientRect().top
navDirectory.addEventListener(`click`, function(e){
    const navOpt = e.target.closest(`h1`)
    if(navOpt.innerText === `Skills`) console.log(`skills`)
    if(navOpt.innerText === `About`) window.scrollTo({top: aboutDivY -taskBarY-20, behavior: `smooth`})
    if(navOpt.innerText === `Projects`) window.scrollTo({top: projectDivY -taskBarY-20, behavior: `smooth`})
    if(navOpt.innerText === `Contact`) console.log(`contact`)
})

const carouselWrapper = document.getElementById(`aboutMeCarousel-Wrapper`)
let carouselSlides = document.querySelectorAll(`.carouselTxtCont`)
let currentSlideIndex = 0
let slideHeight = carouselSlides[0].offsetHeight;
const slideMargin = parseFloat(window.getComputedStyle(carouselSlides[0]).marginBottom)
function showSlide(index) {
    slideHeight = carouselSlides[0].offsetHeight;
    if (index >= carouselSlides.length){
        currentSlideIndex = 0
    }
    else if (index < carouselSlides.length){
        currentSlideIndex++
        slideHeight += slideMargin
    }
    carouselSlides.forEach(slide => {
        slide.style.transform = `translateY(-${currentSlideIndex * slideHeight}px)`
    });
}

setInterval(() =>{
    showSlide(currentSlideIndex + 1)
}, 6000)
