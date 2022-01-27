const gridItem = document.querySelectorAll('.grid-item');
const moonIcon = document.querySelector('.fa-moon');
const sunIcon = document.querySelector('.fa-sun');

if (localStorage) {
    const isDark = localStorage.getItem('isDark');
    if (isDark === 'true') {
        document.body.classList.add('dark-mode');
        moonIcon.parentElement.classList.add('none');
    } else sunIcon.parentElement.classList.add('none');
}
console.log(localStorage.getItem('isDark'));

const toggleDarkMode = (event) => {
    document.body.classList.toggle('dark-mode');
    if (event.target === moonIcon) {
        moonIcon.parentElement.classList.add('none');
        sunIcon.parentElement.classList.remove('none');
        localStorage.setItem('isDark', 'true');
    } else {
        sunIcon.parentElement.classList.add('none');
        moonIcon.parentElement.classList.remove('none');
        localStorage.setItem('isDark', 'false');
    }
}

moonIcon.addEventListener('click', toggleDarkMode);
sunIcon.addEventListener('click', toggleDarkMode);

const showGridTitle = (event) => {
    const titleBackground = event.currentTarget.firstChild.nextElementSibling;
    titleBackground.classList.remove('hidden');
}

const hideGridTitle = (event) => {
    const titleBackground = event.currentTarget.firstChild.nextElementSibling;
    titleBackground.classList.add('hidden');
}

gridItem.forEach((element) => {
    element.addEventListener('mouseover', showGridTitle);
    element.addEventListener('mouseleave', hideGridTitle);
})

const yellowBall = document.querySelector('.yellow-ball');

const toggleYellowBall = (event) => {

}

yellowBall.addEventListener('click', toggleYellowBall);

let lastScroll = 0;
const scrollFun = (event) => {
    const windowHeight = window.innerHeight;
    const currentScroll = window.pageYOffset;
    const goDown = document.querySelector('.go-down');

    if (currentScroll > lastScroll && currentScroll > (windowHeight - 400)) goDown.style.opacity = 0;
    else if (currentScroll < lastScroll) goDown.style.opacity = 1;

    if (currentScroll > lastScroll && !document.body.classList.contains('scroll-down') && currentScroll > windowHeight) {
        document.body.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && !document.body.classList.contains('scroll-up')){
        document.body.classList.remove('scroll-down');
    }
    lastScroll = currentScroll;
}

window.addEventListener('scroll', scrollFun);