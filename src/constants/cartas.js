const imagens = [
  "javascript.png",
  "nextjs.png",
  "nodejs.png",
  "reactjs.png",
  "typescript.png",
  "vitejs.png",
];

const cartasUnicas = imagens.map((imagem, idDoPar) => ({ imagem, idDoPar }));

export const paresDeCartas = [...cartasUnicas, ...cartasUnicas].map(
  (props, id) => ({ ...props, id })
);
