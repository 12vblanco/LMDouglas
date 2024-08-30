// src/data/booksData.js
const booksData = [
  {
    id: 1,
    title: "Gharantia's Guardian",
    image: {
      webp: "../../assets/imgs/book_coverX1.webp",
      png: "../../assets/imgs/book_coverX1.png",
      webp2x: "../../assets/imgs/book_coverX2.webp",
      png2x: "../../assets/imgs/book_coverX2.png",
      webp3x: "../../assets/imgs/book_coverX3.webp",
      png3x: "../../assets/imgs/book_coverX3.png",
    },
    background: {
      jpg: "../../assets/imgs/forest.jpg",
      webp: "../../assets/imgs/forest.webp",
    },
    buyLinks: {
      amazonUS:
        "https://www.amazon.com/Gharantias-Guardian-Chronicles-Endless-Book-ebook/dp/B0CJS2X6Y7/",
      amazonUK: "https://www.amazon.co.uk/dp/B0CJS2X6Y7/",
    },
    isTextFirst: true,
  },
  {
    id: 2,
    title: "Placeholder Title",
    image: {
      webp: "../../assets/imgs/placeholder.webp",
      png: "../../assets/imgs/placeholder.png",
      webp2x: "../../assets/imgs/placeholder2x.webp",
      png2x: "../../assets/imgs/placeholder2x.png",
      webp3x: "../../assets/imgs/placeholder3x.webp",
      png3x: "../../assets/imgs/placeholder3x.png",
    },
    background: {
      jpg: "../../assets/imgs/placeholder_background.jpg",
      webp: "../../assets/imgs/placeholder_background.webp",
    },
    buyLinks: {
      amazonUS: "#",
      amazonUK: "#",
    },
    isTextFirst: false,
  },
];

export default booksData;
