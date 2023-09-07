export const colors = [
  "blue",
  "green",
  "yellow",
  "lightBlue",
  "orange",
  "red",
  "purple",
];


export const favouriteSongs = [
  {
    "song": "Melendi",
    "artist": "Caminando por la vida"
  }, {
    "song": "Estopa",
    "artist": "Como Camarón"
  },
  {
    "song": "Ricky Martin",
    "artist": "Livin' la Vida Loca"
  },
  {
    "song": "Chayanne",
    "artist": "Torero"
  },
  {
    "song": "Shakira",
    "artist": "Ciega, Sordomuda"
  },
  {
    "song": "Juanes",
    "artist": "A Dios le Pido"
  }
]

export function calculateDaysUntilBirthday() {
  const today = new Date();
  const year = today.getFullYear();
  const birthday = new Date(year + 1, 6, 26);
  return Math.floor((birthday - today) / (1000 * 60 * 60 * 24));
}
