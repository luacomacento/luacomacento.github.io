const DEFAULT_GITHUB_URL = 'https://github.com/luacomacento';
const DEFAULT_PREVIEW_URL = 'https://luacomacento.github.io';
const IMAGES_URL = './images/previews';

export const projects = [
  {
    title: 'Minesweeper',
    image: `${IMAGES_URL}/minesweeper.gif`,
    description: 'Um clássico jogo de Campo Minado feito em JavaScript puro.',
    skills: ['javascript', 'html5', 'css3'],
    githubLink: `${DEFAULT_GITHUB_URL}/minesweeper`,
    previewLink: `${DEFAULT_PREVIEW_URL}/minesweeper`,
  },
  {
    title: 'To-Do List',
    image: `${IMAGES_URL}/todo-list.gif`,
    description: 'Uma lista de tarefas simples, usando localStorage para salvar os itens. Desenvolvido como projeto do curso da Trybe.',
    skills: ['javascript', 'html5', 'css3'],
    githubLink: `${DEFAULT_GITHUB_URL}/todo-list`,
    previewLink: `${DEFAULT_PREVIEW_URL}/todo-list`,
  },
  {
    title: 'Solar System',
    image: `${IMAGES_URL}/solar-system.gif`,
    description: 'Uma página simples utilizando React, que mostra uma lista com os planetas do sistema solar e missões espaciais. Desenvolvido como projeto do curso da Trybe.',
    skills: ['react', 'javascript', 'html5', 'css3'],
    githubLink: `${DEFAULT_GITHUB_URL}/solar-system`,
    previewLink: `${DEFAULT_PREVIEW_URL}/solar-system`,
  },
  {
    title: 'Pixels Art',
    image: `${IMAGES_URL}/pixels-art.gif`,
    description: 'Um simples quadro de pixels que permite ao usuário pintar ponto a ponto em cores de sua escolha (com opções geradas aleatoriamente pela página). Desenvolvido como projeto do curso da Trybe.',
    skills: ['javascript', 'html5', 'css3'],
    githubLink: `${DEFAULT_GITHUB_URL}/pixels-art`,
    previewLink: `${DEFAULT_PREVIEW_URL}/pixels-art`,
  },
];
