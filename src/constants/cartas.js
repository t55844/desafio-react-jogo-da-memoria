const imagens = [
  "javascript.png",
  "nextjs.png",
  "nodejs.png",
  "reactjs.png",
  "typescript.png",
  "vitejs.png",
];

const cartasUnicas = imagens.map((imagem, indice) => ({
  imagem,
  idDoPar: `${indice + 1}`,
  classe: ''
}));

export const cartasMocadas = [...cartasUnicas, ...cartasUnicas].map(
  (props, indice) => ({
    ...props,
    id: `${indice + 1}`,
  })
);
