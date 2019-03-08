class BoardMember {
  constructor(name, homeState, training) {
    this.name = name;
    this.homeState = homeState;
    this.training = training;
  }

   veto() {
    return `No, I must disagree`
  }

   approve() {
    return `You can do that!`
  }

   doCharity() {
    return `I like to help people.`
  }

   releasePressStatement() {
    return `You will see great things from Scuber.`
  }

   sayHi() {
    return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`
  }
}

 // In `index.js`, build an ES2015 `Ceo` class with the following properties: `name`, `training`, and `homeState`.  Use inheritance to accomplish this.  A `Ceo` should have all of the methods that a `boardMember` has.
// Add a new method giving the `Ceo` the ability to hire new employees.  This functionality should not be available to a board member.  So the `Ceo` would have one new method: `hireEmployee` — returns `Welcome aboard!`
class Ceo extends BoardMember {
  hireEmployee() {
    return 'Welcome aboard!'
  }
} 
