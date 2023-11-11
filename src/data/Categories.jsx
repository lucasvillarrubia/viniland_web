import { GiSpiralLollipop, GiStarsStack, GiBoombox, GiSaxophone } from "react-icons/gi";
import { BsVinyl } from "react-icons/bs";
import { TbHandRock } from "react-icons/tb";
import { SiSoundcharts } from "react-icons/si";
import { HiOutlineHeart } from "react-icons/hi";

export const CategoryCollection = [
        {
                id: 1,
                name: 'Favs',
                category: 'favs',
        },
        {
                id: 2,
                name: 'Pop',
                category: 'pop',
        },
        {
                id: 3,
                name: 'Rock',
                category: 'rock',
        },
        {
                id: 4,
                name: 'R&B',
                category: 'rnb',
        },
        {
                id: 5,
                name: 'Hip Hop',
                category: 'rap',
        },
        {
                id: 6,
                name: 'Books',
                category: 'books',
        },
        {
                id: 7,
                name: 'Vinyls',
                category: 'vinyl',
        },
        {
                id: 8,
                name: 'ARG',
                category: 'argento',
        }
]; 

export const IconByCat = {
        favs: <HiOutlineHeart />,
        pop: <GiSpiralLollipop />,
        rock: <TbHandRock />,
        rnb: <SiSoundcharts />,
        rap: <GiBoombox />,
        books: <GiSaxophone />,
        vinyl: <BsVinyl />,
        argento: <GiStarsStack />
      }
