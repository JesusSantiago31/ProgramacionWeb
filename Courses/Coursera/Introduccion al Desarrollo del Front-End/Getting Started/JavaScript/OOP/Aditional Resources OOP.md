# Resources of OOP

## Constructor
**[Constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor):** To know how it works.

The *constructor* method is a special method of a class for creating and initializing an object instance of that class.

### Description
A constructor enables you to provide any custom initialization that must be done before any other methods can be called on an instantiated object.
```js
class Person {
  constructor(name) {
    this.name = name;
  }

  introduce() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const otto = new Person("Otto");

otto.introduce(); // Hello, my name is Otto
```

If you don't provide your own constructor, then a default constructor will be supplied for you. If your class is a base class, the default constructor is empty

## Classes
**[Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)**

## OOP
**[OOP](https://css-tricks.com/the-flavors-of-object-oriented-programming-in-javascript/)**

## Regular Expressions
**[RG](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions)**

## RegExp
**[RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)**
