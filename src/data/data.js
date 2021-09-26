import { v4 as uuidv4 } from 'uuid';

function music() {
    return [
        {
            id: uuidv4(),
            author: "DaBaby",
            music: "ROCKSTAR",
            image: "https://upload.wikimedia.org/wikipedia/ru/c/c2/DaBaby_-_Blame_It_on_Baby.png",
            url: "https://dl.mp3mob.net/uploads/files/2020-04/1587653755_dababy-feat_-roddy-ricch-rockstar.mp3",
            active: true,
            favorite: false,
            repeat: false,
            duration: "1:23"
        },
        {
            id: uuidv4(),
            author: "Kodak Black",
            music: "ZEZE",
            image: "https://img.discogs.com/HB-Eu2FBLm2LMBCEvqgAF4-BD3E=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-13078670-1563280670-6532.jpeg.jpg",
            url: "https://cdn52.zvuk.com/track/stream?id=57559673&code=NNiynZbu6Ruw1h17s3MVqg&expires=1632745697",
            active: false,
            favorite: false,
            repeat: false,
            duration: "3:51"
        },
        {
            id: uuidv4(),
            author: "Джарахов, Markul",
            music: "Я В Моменте",
            image: "https://dfm.ru/uploads/9b/70/bc263f07083400820f85f982867a.jpg",
            url: "https://mp3uk.net/mp3/files/dzharahov-markul-ya-v-momente-mp3.mp3",
            active: false,
            favorite: false,
            repeat: false,
            duration: "3:23"
        },
        {
            id: uuidv4(),
            author: "LOST FREQUENCIES",
            music: "ARE YOU WITH ME",
            image: "https://i1.sndcdn.com/artworks-000084779311-iq5yom-t500x500.jpg",
            url: "https://muzzona.info/uploads/files/2020-12/1609325263_lost-frequencies-are-you-with-me.mp3",
            active: false,
            favorite: false,
            repeat: false,
            duration: "2:23"
        },
    ];
};

export default music;