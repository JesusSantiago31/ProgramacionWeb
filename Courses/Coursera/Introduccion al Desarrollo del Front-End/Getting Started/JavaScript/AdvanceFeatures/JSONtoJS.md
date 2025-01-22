# JSON to JS
```js 
'{"greeting":"hello"}' 
```
This is basically an object represented in the form of a String

```js 
cons jsonStr ='{"greeting":"hello"}' 

JSON.parse(jsonStr)

// or

cons aPlainObj = JSON.parse(jsonStr)
aPlainObj.greeting = 'hi'
aPlainObj
```

# JS to JSON

```js
cons data = {
    firstName: "Jhon",
    lastName: "Doe",
    greeting: "Hello",
}
JSON.stringify(data)

```
