const DEFAULT_GITHUB_URL = 'https://github.com/luacomacento';
const DEFAULT_PREVIEW_URL = 'https://luacomacento.github.io';
const IMAGES_URL = './images/previews';

export const projects = [
  {
    title: 'Yummy App',
    image: `${IMAGES_URL}/yummy.gif`,
    description: 'Uma aplicação front-end completa de receitas, tanto para comidas quanto para bebidas. Permite ao usuário buscar, compartilhar e salvar as receitas, consumindo duas APIs públicas.',
    skills: ['react', 'redux', 'testing-library', 'javascript', 'html5', 'css3'],
    githubLink: `${DEFAULT_GITHUB_URL}/yummy-app`,
    previewLink: `${DEFAULT_PREVIEW_URL}/yummy-app`,
  },
  {
    title: 'Store Manager API',
    image: `${IMAGES_URL}/store-manager.jpeg`,
    description: 'Uma API RESTful para gerenciamento de uma loja, desenvolvida em Node.js. Os diversos endpoints permitem criar, ler, atualizar e deletar informações sobre produtos e vendas num banco de dados MySQL.',
    skills: ['nodedotjs', 'express', 'mocha', 'mysql', 'docker'],
    githubLink: `${DEFAULT_GITHUB_URL}/store-manager`,
  },
  {
    title: 'Neon Trivia',
    image: `${IMAGES_URL}/trivia-game.gif`,
    description: 'Uma aplicação front-end que faz uso de uma API pública para criar um jogo de perguntas e respostas. Feito com React/Redux e estilizado ao estilo Neon.',
    skills: ['react', 'redux', 'javascript', 'html5', 'css3'],
    githubLink: `${DEFAULT_GITHUB_URL}/trivia-game`,
    previewLink: `${DEFAULT_PREVIEW_URL}/trivia-game`,
  },
  {
    title: 'Minesweeper',
    image: `${IMAGES_URL}/minesweeper.gif`,
    description: 'Um clássico jogo de Campo Minado feito em JavaScript puro. Possui três níveis de dificuldade, com posições aleatórias das bombas.',
    skills: ['javascript', 'html5', 'css3'],
    githubLink: `${DEFAULT_GITHUB_URL}/minesweeper`,
    previewLink: `${DEFAULT_PREVIEW_URL}/minesweeper`,
  },
  {
    title: 'TrybeTunes',
    image: `${IMAGES_URL}/trybetunes.gif`,
    description: 'Um aplicativo em React.js de busca e visualização de músicas, com requisição à API da Apple Music. Desenvolvido como projeto do curso da Trybe.',
    skills: ['react', 'javascript', 'css3'],
    githubLink: `${DEFAULT_GITHUB_URL}/trybetunes`,
    previewLink: `${DEFAULT_PREVIEW_URL}/trybetunes`,
  },
  {
    title: 'To-Do List',
    image: `${IMAGES_URL}/todo-list.gif`,
    description: 'Uma lista de tarefas básica, usando localStorage para salvar os itens. Desenvolvido como projeto do curso da Trybe.',
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
    description: 'Um quadro de pixels que permite ao usuário pintar ponto a ponto em cores de sua escolha (com opções geradas aleatoriamente pela página). Desenvolvido como projeto do curso da Trybe.',
    skills: ['javascript', 'html5', 'css3'],
    githubLink: `${DEFAULT_GITHUB_URL}/pixels-art`,
    previewLink: `${DEFAULT_PREVIEW_URL}/pixels-art`,
  },
];
