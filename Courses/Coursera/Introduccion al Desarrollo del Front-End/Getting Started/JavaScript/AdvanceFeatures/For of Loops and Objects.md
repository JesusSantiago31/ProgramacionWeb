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
 