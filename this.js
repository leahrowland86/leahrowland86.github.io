console.log('This JS file has loaded.')

// const and let just have to do with defining a variable

// the datatypes we are working with can be mutable or immutable
// const or let is just a declaration that says we can redefine
// the variable or we cannot redefine the variable
let a = 'a';
a = 'b';

// this - is a keyword in javascript; common in any object oriented language; (called "self" in python)
// "this" refers to the object that is invoking the method

const garcia = {
  albums: ['shady grove', 'run for the roses', 'hooteroll', 'Garcia', 'Reflections'],
  instruments: ['Vocals', 'pedal steel', 'electric guitar', 'acoustic guitar', 'banjo'],
  alive: false,
  quote: 'Im shopping around for something to do that no one will like',
  friends: [{
    name: 'Bobby weir',
    hobby: 'guitar'
  },
  {
    name: 'Bob Dylan',
    hobby: 'writing songs'
  },
  {
    name: 'Allen Ginsberg',
    hobby: 'writing poems'
  },
  {
    name: 'Phil Lesh',
    hobby: 'Playing dope bass lines'
  }]
}

console.log(garcia.albums[2]);
console.log(garcia.friends[0].name);
console.log(garcia.friends[2].hobby);
console.log(garcia.instruments[4]);

garcia.alive = true;
garcia['quote'] = "Everybody just be nice to each other";

garcia.speak = function() {
    console.log("Heyy, That's a good song!");
}
garcia.speak();

garcia.letsPlay = function() {
    console.log("La daaa da da, La daa, da, da");
}
garcia.letsPlay();

const foo = {
  value: 12,
  getValue(){
    console.log(this, "<-- this");
    return this.value;
  },
  setValue: function(val){
    console.log(this, "<--- this in setValue")
    return this.value = val;
  },
  addValue: (val) => {
    console.log(this, "<---- arrow function");
    // arrow functions preserve the context in which they
    // we defined in
    // the foo object is a global variable
    // so this refers to the window object
    // the window object is a object given to us by our browser
    // and all gloabl variables are defined within that context
    console.log(this.value, "< --- this.value")
    return this.value + val;
  }

}

// Sally went down the hill and sally filled the bucket
// Sally went down the hill and she filled the bucket

// console.log(foo.setValue(4)); // 4
// console.log(foo.getValue()); // > 12



const game = {
  timer: 10,
  start(){
    const gameTimer = window.setInterval(() => {
      // arrow functions they don't bind this
      console.log('hi', this)
      this.timer -= 1;

      if(this.timer === 0){
        // clear the interval
        clearInterval(gameTimer);
        console.log('Interval over');
      }


    }, 1000);
  }
}


game.start()

// 1. when we define an object method
//  we use the function keyword (object concise syntax)
 // 2. we can use arrow functions inside of our methods so that no
 // matter what inside of our method we will refer to our object
  // 3. if something is happening that is unexpected,
  //just console.log(this)

// as a rule of thumb
// if you want a property to change
// in this case score or lives,
// make a method that changes it
// aka increaseScore or changeLives change thier
// respective properties
const player = {
  score: 10,
  lives: 3,
  name: prompt('What is your name'),
  increaseScore(){
    // this.score = this.score + 1;
    return this.score += 1;
  },
  changeLives(increase){

    if(increase === true){
      return this.lives += 1;
    } else {
      return this.lives -= 1;
    }
  }
}

player.increaseScore()

const movie = { title: "L'Avventura", director: "Michelangelo Antonioni", year: 1960 }

// how to loop over an object

// for ... in loop (this should be used when you are
// looping over an objects properties
// console.log('movie array ', movie)
// for (let key in movie){

//   console.log(key, "< ---- key ");
//   console.log(movie[key], "<--- movie[key]")
//   console.log(movie.key, " <--- movie.key")
//   // How to do you print the value?
// }



const film = { title: "Eraserhead", director: "David Lynch", year: 1978 }

for (let prop in film){
  console.log(prop, "<_-- this is each key")
  console.log(film[prop] , "<---- each value")
}
