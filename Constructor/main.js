//Create a pizza object that has four properties and three methods

let pizza = {}
pizza.crust = "thin"
pizza.cheese = "vegan"
pizza.sauce = "low"
pizza.toppings = function(){
  console.log("Green Peppers, Mushrooms")
}
pizza.order = function(){
  console.log("City Pizza")
}
pizza.numberOfPizzas = function(){
  console.log("2")
}
