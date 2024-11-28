# For of Loops and Objects

To begin, it's important to know that a for of loop cannot work on an object directly, since an object is not iterable. For example:

```js
const car = {
    speed: 100,
    color: "blue"
}

for(prop of car) {
    console.log(prop)
}
```
Running the above code snippet will throw the following error:  
```js
Uncaught TypeError: car is not iterable
```
 Contrary to objects, arrays are iterable. For example:  
 ```js
 const colors = ['red','orange','yellow']
for (var color of colors) {
    console.log(color);
}
```
This time, , the output is as follows:
```js
red
orange
yellow
```
Luckily, you can use the fact that a for of loop can be run on arrays to loop over objects.

But how?

Before you can properly answer this question, you first need to review three built-in methods: `Object.keys()`, `Object.values()`, and `Object.entries()`.

## Built-in methods
### The `Object.keys()` method
The `Object.keys()` method receives an object as its parameter. Remember, this object is **the object you want to loop over**. It's still too early to explain how you'll loop over the object itself; for now, focus on the returned array of properties when you call the `Object.keys()` method.

Here's an example of running the `Object.keys()` method on a brand new car2 object:
```js
const car2 = {
    speed: 200,
    color: "red"
}
console.log(Object.keys(car2)); // ['speed','color']
```
So, when I run `Object.keys()` and pass it my car2 object, the returned value is an array of strings, where each string is a property key of the properties contained in my car2 object

### The` Object.values()` method
Another useful method is `Object.values()`:
```js
const car3 = {
    speed: 300,
    color: "yellow"
}
console.log(Object.values(car3)); // [300, 'yellow']
```
