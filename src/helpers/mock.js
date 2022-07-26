import imgHorizon from "../img/img_ecommerce/playstation/HorizonForbiddenWest.jpg";
import imgGodOfWar from "../img/img_ecommerce/playstation/GodOfWar.jpg";
import imgGranTurismo7 from "../img/img_ecommerce/playstation/GranTurismo7.jpg";

const prods = [
  {
    id: "1",
    name: "Horizon Forbidden West",
    img: [imgHorizon],
    price: 69.99,
    description:
      "Explora tierras remotas, enfréntate a máquinas más grandes e imponentes y descubre increíbles tribus en tu regreso a un futuro lejano en el mundo apocalíptico de Horizon.",
    estrenoinicial: "18 de febrero de 2022",
    genre: "aventura",
    plataforma: "playstation",
    desarrollador: "Guerrilla Games",
  },

  {
    id: "2",
    name: "God Of War",
    img: [imgGodOfWar],
    price: 69.99,
    description:
    "God of War es el renacimiento de la famosa franquicia de aventura y acción de Sony Santa Monica para PlayStation 4 y PC que continúa con las aventuras del legendario espartano Kratos y las consecuencias de sus actos. Esta entrega, popularmente conocida como God of War 4, transcurrirá tras los acontecimientos ocurridos en God of War 3, pero en esta ocasión se ha optado por reemplazar las leyendas de la mitológia griega como marco argumental, en favor de la mitología nórdica, además de incluir un nuevo personaje: el hijo de Kratos.",
    estrenoinicial: "4 de marzo de 2022",
    genre: "accion, aventura,  hack and slash",
    plataforma: "playstation, pc",
    desarrollador: "Sony Interactive Entertainment",
  },

  {
    id: "3",
    name: "Gran Turismo™ 7",
    img: [imgGranTurismo7],
    price: 69.99,
    description:
      "Gran Turismo 7 cuenta con años de experiencia para ofrecerte las mejores características de la larga historia de la franquicia.",
    estrenoinicial: "4 de marzo de 2022",
    genre: "conducción, autos, simulador",
    plataforma: "playstation",
    desarrollador: "Polyphony Digital",
  },

  {},
];

export const getFetch = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(prods);
  }, 3000);
});

// id: '',
// name: '',
// img: [],
// price: 69.99,
// description: '',
// estrenoinicial: '',
// genre: ' ',
// categoria: ' ',
// desarrollador: ' ',
