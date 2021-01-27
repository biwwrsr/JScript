//Parent class
class Media {
    constructor(info){
        this.publishDate = info.publistDate;
        this.name = info.name;
    }
}

//Child class
class Song extends Media {
    constructor(songData){
        super(songData);
        this.artist = songData.artist;
    }
}


const mySong = new Song({
    artist: "Queen",
    name: "Bohemain Rhasody",
    publishDate: 1975,
});

console.log(mySong);