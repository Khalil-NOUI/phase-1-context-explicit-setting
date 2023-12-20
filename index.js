const byronPoodle = {
  name: "Byron",
  ageInYears: 2,
  warn: function() {
    // console.log(`Bark bark bark`);
    // console.log(this)
  }
};


byronPoodle.warn()

//////////////////


const blakeDoodle = {
  name: "Blake",
  breed: "Labradoodle",
  sonicAttack: "ear-rupturing atomic bark",
  mostHatedThing: "noises in the apartment hallway",
  warn: function() {
    // console.log(`${this.name} the ${this.breed} issues an ${this.sonicAttack} when he hears ${this.mostHatedThing}`);
  }
};

blakeDoodle.warn();


//////////////////////

const frog = { name: "Kermit" };
const pig = { name: "Miss Piggy" };
const speak = function() { console.log( `It ain't easy being ${this.name}`)};

frog.speak = speak;
pig.speak = speak;
// console.log(frog.speak === pig.speak);
frog.speak()
pig.speak()


//////////////////////////////

const contextReturner = function() {
  return this;
}

// console.log(contextReturner());

/////////////////////////

 class users {
  constructor(fName, lName) 
    {
      this.firstName = fName;
      this.lastName = lName;
      this.status = "on";
      this.game = "MAFIA 3";
    }

  displayer() {
    console.log(`Hello, ${this.firstName + " " + this.lastName}. we are glad to tell you that your status is ${this.status} and you are doing goof playing ${this.game}`)
  }
  
}


const nUser = new users("Namo", "Bago")

console.log(nUser)

nUser.displayer()

