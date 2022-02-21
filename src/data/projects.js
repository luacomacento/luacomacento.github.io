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
  // {
  //   title: 'Pixels Art',
  //   image: 'https://github.com/raphaelalmeidamartins/pixels-art/raw/main/preview.gif',
  //   description: 'Lorem ipsum dolor sit amet consecteur adiplisci elit.',
  //   skills: '',
  //   githubLink: '',
  //   previewLink: '',
  // },
];
