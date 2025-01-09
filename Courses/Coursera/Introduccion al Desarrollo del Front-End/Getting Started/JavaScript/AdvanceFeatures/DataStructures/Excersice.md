# Exercise: Web page content update

In this reading, you will learn how to capture user input and process it. You'll be introduced to a simple example that demonstrates how to manipulate information displayed based on user input.

To capture user input, you can use the built-in prompt() method, like this:

```js
let answer = prompt('What is your name?');
```


let answer = prompt('What is your name?');
Once you have the user-provided input inside the answer variable, you can manipulate it any way you need to.

For example, you can output the typed-in information on the screen, as an `<h1>` HTML element.

Here's how you'd do that:

```js
let answer = prompt('What is your name?');
if (typeof(answer) === 'string') {
    var h1 = document.createElement('h1')
    h1.innerText = answer;
    document.body.innerText = '';
    document.body.appendChild(h1);
}
```
