// CodeCademy Portfolio Porject :: Message Generator
// https://www.codecademy.com/paths/full-stack-engineer-career-path/tracks/fscp-javascript-syntax-portfolio-project/modules/fscp-mixed-messages/kanban_projects/mixed-messages
// Jokes from https://inews.co.uk/light-relief/jokes/knock-knock-jokes-funny-best-100-189897

/**
 * Object which stores all jokes to be returned by the message generator.
 */

const jokeStore = {
  // Initial empty array which will hold the arguments detailed in a knock knock
  // joke. Decompiled knock knock jokes take the form ['Article', 'Punchline']
  // from which a knock knock joke can be compiled.
   _jokeArr: [],

  // method to add a joke in the form ['Article', 'Punchline']. Will only add a
  // new joke i.e. one which isn't already held in the this._jokeArr array.
   addJoke(article, punchLine) {
    let contains = false;

    for (let i = 0; i < this._jokeArr.length; i++) {
      if (this._jokeArr[i][0] === article && this._jokeArr[i][1] === punchLine) {
        contains = true;
        break;
      }  
    }

    if (contains) {
      console.log(`Joke "${[article, punchLine]}" has already been added.`);
    } else {
      this._jokeArr.push([article, punchLine]);
    }
  },

  // method to remove a joke at a specific index. Will print a message if an
  // attempt is made to remove a joke when the this._jokeArr is already empty.
  removeJoke(ind) {
    if (this._jokeArr.length > 0 && this._jokeArr.length > ind) {
      this._jokeArr.splice(ind, 1);
    } else if (this._jokeArr.length <= ind) {
      if (this._jokeArr.length === 1)       {
        console.log(`There is no element ${ind + 1}. There is only ${this._jokeArr.length} joke saved.`);
      } else {
        console.log(`There is no element ${ind + 1}. There are only ${this._jokeArr.length} jokes saved.`);
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
  },

  // setter method to set this._jokeArr.
  set jokeArr(arr) {
    this._jokeArr = arr;
  }
}

/**
 * Initilises the jokeStore object.
 */
function initJokeStore() {
  jokeStore.addJoke('Cow says.','No, a cow says mooooo!');
  jokeStore.addJoke('Armageddon.','Armageddon a little bored. Let’s go out.');
  jokeStore.addJoke('Stopwatch.','Stopwatcha doin’ and open the stupid door.');
  jokeStore.addJoke('Rough.','Rough, rough, rough! It’s your dog!');
  jokeStore.addJoke('Jester.','Jester silly old man!');
  jokeStore.addJoke('Egg.','Eggcited to see me?');
  jokeStore.addJoke('Amish!','You’re not a shoe!');
  jokeStore.addJoke('Dishes!','Dishes the police come out with your hands up.');
  jokeStore.addJoke('Gorilla!','Gorilla burger! I’ve got the buns!');
  jokeStore.addJoke('Twit.','Did anyone else hear an owl?');
}

/**
 * Generates a message being a randomly selected joke from the joke store. As
 * all knock knock jokes are formed similarily, therefor this method can
 * use this generic format.
 */
function generateMessage() {
  let randomJoke = Math.floor(Math.random() * jokeStore.jokeArr.length);
  let joke = jokeStore.getJoke(randomJoke);
  let article = joke[0];
  let punchLine = joke[1];
  let cleanArticle = article.substring(0,article.length - 1);


  return  `Knock, knock.\nWho's there?\n${article}\n${cleanArticle} who?\n${punchLine}`;
}

initJokeStore();
console.log(generateMessage());