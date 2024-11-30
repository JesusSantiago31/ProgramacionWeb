# Template literals examples
The aim of this reading is to help you understand how template literals work.

### What are template literals?
Template literals are an alternative way of working with strings, which was introduced in the ES6 addition to the JavaScript language.

Up until ES6, the only way to build strings in JavaScript was to delimit them in either single quotes or double quotes:
```js
'Hello, World!'
"Hello, World!"
```

Alongside the previous ways to build strings, ES6 introduced the use of backtick characters as delimiters:  

```js
`Hello, World!`
```
The above code snippet is an example of a template string, which is also known as a template literal.

Note: On most keyboards, the backtick character can be located above the TAB key, to the left of the number 1 key.

 With template literals, an expression can be embedded in a placeholder. A placeholder is represented by ${}, with anything within the curly brackets treated as JavaScript and anything outside the brackets treated as a string:  