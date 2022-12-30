const imagens = [
  "javascript.js.png",
  "nextjs.png",
  "nodejs.png",
  "reactjs.png",
  "typescript.png",
  "vitejs.png",
];

const cartasUnicas = imagens.map((imagem, indice) => ({
  imagem,
  idDaImagem: `${indice + 1}`,
}));
