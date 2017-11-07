function sum(...etc) {
  let result = 0;
  for(let i = 0; i < etc.length; i++) {
    result += etc[i];
  }
  return result;
}

// console.log(sum(1,2,3,4));

//myBind
class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

const markov = new Cat("Markov");
const breakfast = new Cat("Breakfast");

Function.prototype.myBind = function () {
  let obj = arguments[0];
  let array = Array.from(arguments).slice(1);
  // return (...arg1) => {this.apply(obj, array.concat(arg1));};
////
  let something = this;

  return function(){
    something.apply(obj, array.concat(Array.from(arguments)));

  };
};
//
//
// markov.says("meow", "Ned");
// // Markov says meow to Ned!
// // true
//
// // bind time args are "meow" and "Kush", no call time args
// markov.says.myBind(breakfast, "meow", "Kush");
// // Breakfast says meow to Kush!
// // true
//
// // no bind time args (other than context), call time args are "meow" and "me"
// markov.says.myBind(breakfast)("meow", "a tree");
// // Breakfast says meow to a tree!
// // true
//
// // bind time arg is "meow", call time arg is "Markov"
// markov.says.myBind(breakfast, "meow")("Markov");
// // Breakfast says meow to Markov!
// // true
//
// // no bind time args (other than context), call time args are "meow" and "me"
// const notMarkovSays = markov.says.myBind(breakfast);
// notMarkovSays("meow", "me");
// // Breakfast says meow to me!
// // true

function curriedSum(numArgs) {
  let numbers = [];
  return _curriedSum = function(arg) {
    numbers.push(arg);

    if (numbers.length !== numArgs) {
      return _curriedSum;
    }

    let result = 0;
    for (let j = 0; j < numbers.length; j++){
      result += numbers[j];
    }

    return result;
  };
}

Function.prototype.curry = function(numArgs) {
  let numbers = [];
  return _curriedSum = function(arg) {
    numbers.push(arg);

    if (numbers.length !== numArgs) {
      return _curriedSum;
    }

    let result = 0;
    for (let j = 0; j < numbers.length; j++) {
      result += numbers[j];
    }

    return result;
  }
};






Function.prototype.curry = function(numArgs) {
  let numbers = [];
  let something = this;

  return _curriedSum = function(arg) {
    numbers.push(arg);

    if (numbers.length === numArgs) {
      return something(numbers);
    } else {
      return _curriedSum

    }


  }
};

// const sum = function(args) {
//   console.log(typeof args);
// }
//
// sum.curry(2)(1)(2);


Function.prototype.curry = function(numArgs) {
  let numbers = [];
  return _curriedSum = function(arg) {
    numbers.push(arg);

    if (numbers.length !== numArgs) {
      return _curriedSum;
    }

    let result = 0;
    for (let j = 0; j < numbers.length; j++) {
      result += numbers[j];
    }

    return result;
  }
};

// const sum = function(args) {
//   console.log(args);
// }
//
// sum.curry(2)(1)(2);
