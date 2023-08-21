class Movie {
    constructor(title, year, genre, duration) {
      this.title = title;
      this.year = year;
      this.genre = genre;
      this.duration = duration;
      this.watched = false;
      this.rating = null;
    }

    showInfo(){
        console.log(`Title: ${this.title}`);
        console.log(`Year: ${this.year}`);
        console.log(`Genre: ${this.genre}`);
        console.log(`Duration: ${this.duration}`);
        if (this.watched == false){
            console.log('You did not watch the movie.');
        }else {
            console.log('You have already watched this movie.');
        }
        if (this.rating == null){
            console.log(`The movie has not been rated.`);
        }
        else{
            console.log(`Rating: ${this.rating}`);
        }
        console.log('');
    }

    markWatched() {
        this.watched = true;
        console.log(`You marked the movie ${this.title} as watched`);
    }

    rateMovie(rate){
        this.rating = rate;
    }

}

const movie1 = new Movie ("Inception", 2010, "Science Fiction, Action", "2h 28min");
const movie2 = new Movie ("The Shawshank Redemption", 1994, "Drama", "2h 22min");
const movie3 = new Movie ("Guardians of the Galaxy", 2014, "Action, Adventure, Science Fiction", "2h 1min");

movie1.showInfo();
movie2.showInfo();
movie3.showInfo();

movie1.markWatched();
movie1.rateMovie(9.5);
movie1.showInfo();

movie2.markWatched();
movie2.rateMovie(8);
movie2.showInfo();

movie3.markWatched();
movie3.rateMovie(10);
movie3.showInfo();