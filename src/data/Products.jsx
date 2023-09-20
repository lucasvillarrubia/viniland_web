
class product {
        constructor (id, name, author, image, price, genre, xAdded, xOvertimeAdded, isAVinyl) {
          this.id = id;
          this.name = name;
          this.author = author;
          this.image = image;
          this.price = price;
          this.genre = genre;
          this.xAdded = xAdded;
          this.xOvertimeAdded = xOvertimeAdded;
          this.isAVinyl = isAVinyl;
        }
}

export const ProductCollection = [
        new product (1, "After Hours", "The Weeknd", "./images/afterhours.png", 9500, "rnb", 0, 0, true),
        new product (2, "Midnights", "Taylor Swift", "./images/midnights.png", 12000, "pop", 0, 0, true),
        new product (3, "Mr. Morale & the Big Steppers", "Kendrick Lamar", "./images/mrmorale.png", 10000, "rap", 0, 0, true),
        new product (4, "Future Nostalgia", "Dua Lipa", "./images/futurenostalgia.png", 7500, "pop", 0, 0, true),
        new product (5, "Superache", "Conan Gray", "./images/superache.png", 9900, "pop", 0, 0, true),
        new product (6, "RENAISSANCE", "Beyoncé", "./images/renaissance.png", 13000, "pop", 0, 0, true),
        new product (7, "Sour", "Olivia Rodrigo", "./images/sour.png", 3500, "pop", 0, 0, true),
        new product (8, "Gemini Rights", "Steve Lacy", "./images/geminirights.png", 6700, "rnb", 0, 0, true),
        new product (9, "Harry's House", "Harry Styles", "./images/harryshouse.png", 21650, "pop", 0, 0, true),
        new product (10, "MOTOMAMI", "ROSALÍA", "./images/motomami.png", 8700, "pop", 0, 0, true),
        new product (11, "Happier Than Ever", "Billie Eilish", "./images/happierthanever.png", 8600, "pop", 0, 0, true),

        new product (12, "Chemtrails Over the Country Club", "Lana del Rey", "./images/chemtrailsoverthecountryclub-cassette.png", 50000, "rnb", 0, 0, false),
        new product (13, "Bleach", "Nirvana", "./images/bleach-cassette.png", 23000, "rock", 0, 0, false),
        new product (14, "The Lockdown Sessions", "Elton John", "./images/thelockdownsessions-cassette.png", 48000, "pop", 0, 0, false),
        new product (15, "Harry's House", "Harry Styles", "./images/harryshouse-cassette.png", 55000, "pop", 0, 0, false),
        new product (16, "Happier Than Ever", "Billie Eilish", "./images/happierthanever-cassette.png", 35000, "pop", 0, 0, false),
        new product (17, "Greatest Hits", "Queen", "./images/greatesthits-cassette.png", 25000, "rock", 0, 0, false),
        new product (18, "Sucking In The Seventies", "The Rolling Stones", "./images/suckingintheseventies-cassette.png", 10500, "rock", 0, 0, false),
        new product (19, "YHLQMDLG", "Bad Bunny", "./images/yhlqmdlg-cassette.png", 30000, "pop", 0, 0, false),
        new product (20, "Call Me If You Get Lost", "Tyler, The Creator", "./images/callmeifyougetlost.jpg", 9900, "rap", 0, 0, false),
        new product (21, "DISCO", "Kylie Minogue", "./images/DISCO.jpg", 6800, "pop", 0, 0, false),
        new product (22, "Back to Black", "Amy Winehouse", "./images/backtoblack.jpg", 4500, "rnb", 0, 0, false),
        new product (23, "Legacy", "David Bowie", "./images/legacy.jpg", 2300, "rock", 0, 0, false),
        new product (24, "Thriller", "Michael Jackson", "./images/thriller.jpg", 7900, "pop", 0, 0, false),
        new product (25, "Rumours", "Fleetwood Mac", "./images/rumours.jpeg", 6700, "rock", 0, 0, false),
        new product (26, "The Slow Rush", "Tame Impala", "./images/theslowrush.jpg", 5000, "rock", 0, 0, false),
        new product (27, "30", "Adele", "./images/30.jpg", 10500, "pop", 0, 0, false),
        new product (28, "Me", "Elton John", "./images/me-book.png", 6500, "jazz", 0, 0, false),
        new product (29, "Paracaidas y Vueltas", "Andrés Calamaro", "./images/paracaidasyvueltas-book.png", 3500, "jazz", 0, 0, false),
        new product (30, "Chronicles Vol. 1", "Bob Dylan", "./images/chroniclesvol1-book.png", 4100, "jazz", 0, 0, false),
        new product (31, "Born To Run", "Bruce Springsteen", "./images/borntorun-book.png", 3100, "jazz", 0, 0, false)
];

export const ProductsByGenre = ProductCollection.reduce((acc, product) => {
        if(!acc[product.genre]) {
                acc[product.genre] = [];
        }
        acc[product.genre] = [...acc[product.genre], product];
        return acc;
}, {});