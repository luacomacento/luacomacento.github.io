// Recupera os elementos do DOM que serão usados com frequência no código.
const gridItem = document.querySelectorAll('.grid-item');
const moonIcon = document.querySelector('.fa-moon');
const sunIcon = document.querySelector('.fa-sun');

// Variável que determina a última posição do Scroll, usada na função scrollFun.
let lastScroll = 0;

// Verifica se há uma preferência de tema (dark/light) salva no localStorage e ativa o tema correspondente se houver.
if (localStorage) {
    const isDark = localStorage.getItem('isDark');
    if (isDark === 'true') {
        document.body.classList.add('dark-mode');
        moonIcon.parentElement.classList.add('none');
    } else sunIcon.parentElement.classList.add('none');
}

const toggleDarkMode = (event) => {
    document.body.classList.toggle('dark-mode');
    document.body.style.transition = 'background-color 0.1s';
    document.querySelector('header').style.transition = 'margin 0.5s, background-color 0.1s';
    if (event.target === moonIcon) {
        // Ativa o dark mode
        moonIcon.parentElement.classList.add('none');
        sunIcon.parentElement.classList.remove('none');
        localStorage.setItem('isDark', 'true');
    } else {
        // Desativa o dark mode
        sunIcon.parentElement.classList.add('none');
        moonIcon.parentElement.classList.remove('none');
        localStorage.setItem('isDark', 'false');
    }
}

const showGridTitle = (event) => {
    const titleBackground = event.currentTarget.firstChild.nextElementSibling;
    titleBackground.classList.remove('hidden');
}

const hideGridTitle = (event) => {
    const titleBackground = event.currentTarget.firstChild.nextElementSibling;
    titleBackground.classList.add('hidden');
}

const scrollFun = () => {
    const windowHeight = window.innerHeight;
    const currentScroll = window.pageYOffset;
    const goDownArrow = document.querySelector('.go-down');

    // Esconde a seta para baixo ao chegar em determinado ponto da página.
    if (
            currentScroll > lastScroll
            && currentScroll > (windowHeight - 400)
        ) {
            goDownArrow.style.opacity = 0;
        }
    else if (currentScroll < lastScroll) goDownArrow.style.opacity = 1;

    // Mostra ou esconde o header-menu a depender da direção à qual o usuário está fazendo o scroll.
    if (
            currentScroll > lastScroll
            && !document.body.classList.contains('scroll-down')
            && currentScroll > windowHeight
        ) {
            document.body.classList.add('scroll-down');
    } else if (
            currentScroll < lastScroll
            && !document.body.classList.contains('scroll-up')
        ) {
            document.body.classList.remove('scroll-down');
    }

    // Por fim, guarda na variável lastScroll a última posição.
    lastScroll = currentScroll;
}

// Adiciona os escutadores de evento utilizados na página.
window.addEventListener('scroll', scrollFun);
moonIcon.addEventListener('click', toggleDarkMode);
sunIcon.addEventListener('click', toggleDarkMode);
gridItem.forEach((element) => {
    element.addEventListener('mouseover', showGridTitle);
    element.addEventListener('mouseleave', hideGridTitle);
})