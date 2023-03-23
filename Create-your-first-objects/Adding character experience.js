// TODO: create the character object here
const aurora = {
  name:"Aurora",
  health: 150,
  strength:25,
  xp: 30,
  describe(){
    return `${this.name} has ${this.health} health points, ${this.strength} as strength and ${this.xp}`;
  }
};
// Aurora is harmed by an arrow
aurora.health -= 20;

// Aurora equips a strength necklace
aurora.strength += 10;

// Aurora learn a new skill
aurora.xp += 15;

console.log(aurora.describe());



/* const aurora = {
  name: "Aurora",
  health: 150,
  strength: 25,

  // Return the character description
  describe() {
    return `${this.name} has ${this.health} health points and ${this
      .strength} as strength`;
  }
}; */