// CodeCademy Portfolio Porject :: Message Generator
// https://www.codecademy.com/paths/full-stack-engineer-career-path/tracks/fscp-javascript-syntax-portfolio-project/modules/fscp-mixed-messages/kanban_projects/mixed-messages

/**
 * Object which stores all jokes to be returned by the message generator.
 */

const jokeStore = {
  // Initial empty array which will hold the arguments detailed in a knock knock
  // joke. Decompiled knock knock jokes take the form ['Article', 'Punchline']
  // from which a knock knock joke can be compiled.
   _jokeArr: [],

  // method to add a joke in the form ['Article', 'Punchline'].
   addJoke(article, punchLine) {
    this._jokeArr.push([article, punchLine]);
  },

  // method to remove a joke at a specific index. Will print a message if an
  // attempt is made to remove a joke when the this._jokeArr is already empty.
  removeJoke(ind) {
    if (this._jokeArr.length > 0 && this._jokeArr.length > ind) {
      this._jokeArr.splice(ind, 1);
    } else if (this._jokeArr.length <= ind) {
      if (this._jokeArr.length === 1)       {
        console.log(`There is no element at index ${ind}. There is only ${this._jokeArr.length} joke saved.`);
      } else {
        console.log(`There is no element at index ${ind}. There are only ${this._jokeArr.length} jokes saved.`);
      }
    } else {
      console.log('The array is already empty');
    }
  },
  
  // retrieves a joke from the specified index. Will print an error if the index
  // supplied is not valid.
  getJoke(ind) {
    if (this._jokeArr.length > 0 && this._jokeArr.length > ind) {
      return this._jokeArr[ind];
    } else {
      console.log(`The supplied index (${ind}) is out of bounds`);
    }
  },

  // getter method to return the whole joke array.
  get jokeArr() {
    return this._jokeArr;
  }
}

// testing code below - to be deleted for production

jokeStore.addJoke('Stopwatch','Stopwatcha doin’ and open the stupid door.');
//console.log(jokeStore);
//console.log(jokeStore.jokeArr);
console.log('');
console.log('');
console.log(jokeStore.getJoke(1));
jokeStore.removeJoke(10);
jokeStore.removeJoke(0);
//console.log(jokeStore);
console.log(jokeStore.getJoke(0));