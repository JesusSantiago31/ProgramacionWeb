# Introducing to JavaScript

JavaScript is a  a programming language used to create interactive web pages and other applications

JS is the most popular program languaje:
* The browsers understand it

## How it works
### Comments

There are teo varieties of comments in JavaScript 

1. Single comments
```javascript
//This is a single line comment!
/*This could be a single line comment too*/
```
2. Multi-Line comments
```javascript
/* This
is
a
Multi-line
comment */
```
## The semi-colon in JS
In JavaScript, the semi-colon - the ``;`` character -  it is used to clearly delimit parts of the code from some other parts of the code.

**Automatic Semi-Colon Insertion (ASI)**
Interestingly, the browser has a feature known as "Automatic Semi-colon Insertion" - meaning, it does a pretty good job of "filling in the blanks" in case there is a missing semi-colon where there should be one.

Effectively, what that means for developers is that most of the time, it makes no difference if a semi-colon is added or not, since the browser is likely to figure it out anyway.

That's why some developers say that you shouldn't bother with adding semi-colons at all.

#### If you need to type multiple lines of code before you run them, make sure to press the SHIFT + ENTER shortcut key to get onto the next line.
Notice the distinction between pressing the ENTER key to run the JavaScript code you've typed, versus pressing the SHIFT + ENTER shortcut to move onto the next line of code (rather than running the code you've already typed up).

## Output a greeting into the console

In Browser, with the Developer Tools open, click into the empty space in the console tab, just to the right of the blue > character. You should see a blinking vertical line (also referred to as "the cursor"). The cursor indicates that you can type into the console.

```javascript
console.log("Hello World")
```

Here's another, more complex command, to show you that the console.log command comes with a number of tricks.

For example, did you know that you can style the output in the console?

```js
console.log("%cHello, World", "color: blue; font-size: 40px");
```

## Output multiple words into the console

To output multiple words into the console, you can join them using the + character, formally known as the "concatenation operator" when we're joining pieces of text, or the "addition operator", for performing the mathematical operation of adding two numbers. 

```js
 console.log("Hello " + "there, " + "World")
 ```