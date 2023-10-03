class Media {
    constructor(title) {
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
  
    get title() {
      return this._title;
    }
  
    get isCheckedOut() {
      return this._isCheckedOut;
    }
  
    addRating(rating) {
    if (rating >= 1 && rating <= 5) {
      this._rating = rating;
      console.log("Rating added successfully.");
    } else {
      console.log("Please enter a number from 1 to 5.");
    }
  }
  
    set isCheckedOut(currentCheckedOutStatus) {
      this._isCheckedOut = currentCheckedOutStatus;
    }
  
    toggleCheckoutStatus(change) {
      this._isCheckedOut = change;
    }
  
    getAverageRating() 
    {
      const initialValue = 0;
      const sum = this._ratings.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
      const average_rating = sum / this._ratings.length;
      return average_rating;
    }
  
  }
  
  class Book extends Media {
    constructor(author, title, pages) {
      super(title);
      this._author = author;
      this._pages = pages;
    }
  
    get author() {
      return this._author;
    }
  
    get pages() {
      return this._pages;
    }
  }
  
  class Movie extends Media {
    constructor(director, title, runTime) {
      super(title);
      this._director = director;
      this._runTime = runTime;
    }
  
    get director() {
      return this._director;
    }
  
    get runTime() {
      return this._runTime;
    }
  }
  
  class CD extends Media 
  {
  constructor(singer_band, title, number_of_songs) 
  {
  super(title);
  this._singer_band = singer_band;
  this._number_of_songs = number_of_songs;
  }
  
  get number_of_songs() 
  {
  return this._number_of_songs
  }
  }
  
  const historyOfEverything = new Book("Bill Bryson", 'A Short History of Nearly Everything', 544);
  console.log(historyOfEverything)
  console.log(historyOfEverything.isCheckedOut);
  historyOfEverything.toggleCheckoutStatus(true);
  console.log(historyOfEverything.isCheckedOut);
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  console.log(historyOfEverything.getAverageRating());
  
  const speed = new Movie('Jan de Bont','Speed',116)
  speed.toggleCheckoutStatus(true);
  console.log(speed.isCheckedOut);
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  console.log(speed.getAverageRating());
  const cd_Okean_elsy = new CD('Okean Elsy', 'Obiymy', 9)
  console.log(cd_Okean_elsy);
  cd_Okean_elsy.addRating(5);å
  console.log(cd_Okean_elsy);
  