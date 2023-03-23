const r = Number(prompt("Enter the circle radius:"));
const circle ={area(){
  return Math.PI*r*r
},
  circumference(){
    return 2 * Math.PI * r
  }
}
// TODO: create the circle object here

console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);