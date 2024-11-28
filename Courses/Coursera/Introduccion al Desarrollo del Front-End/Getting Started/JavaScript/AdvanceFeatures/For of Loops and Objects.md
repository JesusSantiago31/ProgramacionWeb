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

Before you can properly answer this question, you first need to review three built-in methods: Object.keys(), Object.values(), and Object.entries().

