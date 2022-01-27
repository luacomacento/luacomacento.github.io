const gridItem = document.querySelectorAll('.grid-item');

const showGridTitle = (event) => {
    // console.log(event.currentTarget.firstChild.nextElementSibling);
    // if (event.currentTarget === event.target) {
    //     const title = document.querySelector(`.${event.currentTarget.className} h3`);
    //     title.classList.remove('hidden');
    // }  
    const titleBackground = event.currentTarget.firstChild.nextElementSibling;
    titleBackground.classList.remove('hidden');
}

const hideGridTitle = (event) => {
    // console.log(event.target);
    // if (event.currentTarget === event.target) {
    //     const title = document.querySelector(`.${event.currentTarget.className} h3`);
    //     // event.currentTarget.style.background = 'white';
    //     title.classList.add('hidden');
    // }  
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