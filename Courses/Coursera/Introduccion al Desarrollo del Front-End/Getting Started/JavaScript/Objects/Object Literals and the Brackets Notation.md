# Object Literals and the Brackets Notation

There is an alternative syntax to the dot notation I used up until this point.

This alternative syntax is known as the brackets notation.

To understand how it works, it's best to use an example, so I'll go through the process of coding the house2 object again, in the same way that I did with the dot notation, only this time, I'll use the brackets notation.
```js
var house2 = {};
house2["rooms"] = 4;
house2['color']= "pink";
house2["priceUSD"] = 12345;
console.log(house2); // {rooms: 4, color: 'pink', priceUSD: 12345}
```

Note that using the brackets notation, I essentially just wrap each property's key as a string, inside either the single or double quotes - just like with regular strings. 

Then I wrap the entire property key into an opening and a closing square bracket.

That's essentially all there is to it.

I can both access and update properties on objects using either the dot notation, or the brackets notation, or a combination of both, like in the following example:
```js
var car = {};
car.color = "red";
car["color"] = "green";
car["speed"] = 200;
car.speed = 100;
console.log(car); // {color: "green", speed: 100}
```

For the time being, this is probably enough information on object creation. 

Before I discuss the topic of arrays and objects, let me just give you another important piece of information about the brackets notation. 

With the brackets notation, I can add space characters inside property names, like this:  
```js
car["number of doors"] = 4;
console.log(car); // {color: 'green', speed: 100, number of doors: 4}
```
Additionally, I can add numbers (as the string data type) as property keys:  
```js
car["2022"] = 1901;
console.log(car); // {2022: 1901, color: 'green', speed: 100, number of doors: 4}
```
However, doing this is discouraged, due to obvious reasons of having a property key as a number string not really conveying a lot of useful information.

Finally, there's one really useful thing that bracket notation has but is not available in the dot notation: It can evaluate expressions.

To understand what that means, consider the following example:
```js
var arrOfKeys = ['speed', 'altitude', 'color'];
var drone = {
    speed: 100,
    altitude: 200,
    color: "red"
}
for (var i = 0; i < arrOfKeys.length; i++) {
    console.log(drone[arrOfKeys[i]])
}


```
Using the fact that brackets notation can evaluate expressions, I accessed the arrOfKeys[i] property on the drone object. 

This value changed on each loop while the for loop was running.

Specifically, the first time it ran, it was evaluated like this: 

The value of i was 0 

The value of arrOfKeys[i] was arrOfKeys[0], which was "speed" 

Thus, drone[arrOfKeys[i]] was evaluated to drone["speed"] which is equal to 100

This allowed me to loop over each of the values stored inside the drone object, based on each of its properties' keys.