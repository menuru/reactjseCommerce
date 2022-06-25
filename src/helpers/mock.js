import imgHorizon from "../img/img_ecommerce/playstation/HorizonForbiddenWest.jpg";
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
    name: "Gran Turismo™ 7",
    img: [imgGranTurismo7],
    price: 69.99,
    description:
      "Gran Turismo 7 cuenta con años de experiencia para ofrecerte las mejores características de la larga historia de la franquicia.",
    estrenoinicial: "",
    genre: "conducción, autos, simulador",
    plataforma: "playstation",
    desarrollador: "Polyphony Digital",
  },

  {},

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
