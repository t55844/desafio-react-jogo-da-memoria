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
  idDaImagem: `${indice + 1}`,
}));

export const cartasMocadas = [...cartasUnicas, ...cartasUnicas].map(
  (props, indice) => ({
    ...props,
    id: `${indice + 1}`,
  })
);
