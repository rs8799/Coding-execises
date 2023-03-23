// TODO: create the dog object here
const dog = {
  name:"Rex",
  species:"German Shepard",
  size:"huge",
  bark(){
    return "Grr Grr"
  }
};

console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);