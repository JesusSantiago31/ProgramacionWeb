# Using SPREAD AND REST
In this reading, you'll learn how to join arrays, objects using the rest operator. You will also discover how to use the spread operator to:

 Add new members to arrays without using the push() method,

Convert a string to an array and

Copy either an object or an array into a separate obje

**Recall that the push() and pop() methods are used to add and remove items from the end of an array.**

## Join arrays, objects using the rest operator
Using the spread operator, it's easy to concatenate arrays:
```JS
const fruits = ['apple', 'pear', 'plum']
const berries = ['blueberry', 'strawberry']
const fruitsAndBerries = [...fruits, ...berries] // concatenate
console.log(fruitsAndBerries); // outputs a single array
```
Here's the result:  
```JS
['apple', 'pear', 'plum', 'blueberry', 'strawberry']
```
It's also easy to join objects:  
```JS
const flying = { wings: 2 }
const car = { wheels: 4 }
const flyingCar = {...flying, ...car}
console.log(flyingCar) // {wings: 2, wheels: 4}
```
