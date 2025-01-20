# JSON is just a string - but there are rules that it must follow


JSON is a string, but it must be a properly-formatted string. In other words, it must adhere to some rules.

If a JSON string is not properly formatted, JavaScript would not be able to parse it into a JavaScript object.

JSON can work with some primitives and some complex data types, as described below.

Only a subset of values in JavaScript can be properly stringified to JSON and parsed from a JavaScript object into a JSON string.

These values include:

* **primitive values**: strings, numbers, bolleans, null

* **complex values**: objects and arrays (no functions!)

* Objects have double-quoted strings for all keys

* Properties are comma-delimited both in JSON objects and in JSON arrays, just like in regular JavaScript code

* String properties must be surrounded in double quotes. For example:

 

* *   "fruits",

 

* * "vegetables"

* Number properties are represented using the regular JavaScript number syntax; e.g

 

* * 5,

 

* * 10,

 

* * 1.2

* Boolean properties are represented using the regular JavaScript boolean syntax, that is:

 

* * true

 

   and

 

* * false

* Null as a property is the same as in regular JavaScript; it's just a

 

* * null

You can use object literals and array literals, as long as you follow the above rules

What happens if you try to stringify a data type which is not accepted in JSON syntax?

For example, what if you try to stringify a function? The operation will silently fail.

If you try to stringify some other data types, such as a BigInt number, say 123n, you'd get the following error: Uncaught TypeError: Do not know how to serialize a BigInt.

Some examples of JSON strings
Finally, here is an example of a stringified JSON object, with a single key-value pair:

```'{"color":"red"}' ```

Here's a bit more complex JSON object:

```'{"color":"red", "nestedObject": { "color": "blue" } }' ```

The above JSON object encodes two properties:

```"color":"red"```

```"nestedObject": { "color": "blue" }```

It's also possible to have a JSON string encoding just an array:

```'["one", "two", "three"]'```

The above JSON string encodes an array holding three items, three values of the string data type. Obviously, just like objects, arrays can nest other simple or complex data structures.

For example:

```'[{ "color": "blue" }, {"color: "red"}]'```



