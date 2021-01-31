class Song{
    constructor(){
        this.title;
        this.author;
    }

    play(){
        console.log("Song playing!");
    }
    
    stop(){
        console.log("Stop playing");
    }
}
const mySong = new Song();
mySong.stop();