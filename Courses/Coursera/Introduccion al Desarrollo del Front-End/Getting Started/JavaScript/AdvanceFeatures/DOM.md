# Document Object Model DOM
## Whats DOM is?

DOM or *Document Object Model*  is the data representation of the objects that comprise the structure and content of a document on the web

DOM is a programming interface for web documents. It represents the page so that **programs can change** the document structure, style, and content. 

The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.

* For example, the root node is `<html>` and the rets elements like `<head>` `<body>`are the child nodes
```html
<html>
  <head>
    <title>Example</title>
  </head>
  <body>
    <h1>Hello World!</h1>
    <p>This is a Paragraph.</p>
  </body>
</html>
```
* DOM:
```css
html
├── head
│   └── title
└── body
    ├── h1
    └── p
```
## DOM Nodes 
* **Element Node:** Represents HTML tags, such as `<div>` or `<p>`.
* **Text Node:** Contains the text inside elements.
* **Attribute Node:** Represents the attributes of HTML elements, such as id or class.

## DOM Manipulation con JS
The browser provides an object called `document` to interact with the DOM. Here are some examples:

### **Access Elements:**
These methods ares used to select elements from the DOM 

* **By ID**

     Returns the element with the specified id.
     ```JS
      const element = document.getElementById("myElement");
     ```
* **By Class**

    Returns a live HTMLCollection of elements with the specified class name.
    ```JS
     const elements = document.getElementsByClassName("myClass");
    ```
* **By TagName**

    Returns a live HTMLCollection of elements with the specified tag name 
    ```JS
    const elements = document.getElementsByTagName("p");
    ```
* **By Query Selector**
    
    Returns the first element that matches the specified CSS selector.
    ```JS
    const element = document.querySelector(".myClass");
    ```
### Methods to Create and Modify Elements 
These methods allows you to create, clone, and remove elements.

* **Create Elements**
Creates a new element with the specified tag name

```js
// createElement("element");
const newDiv = document.createElement("div");
```

```js
//createTextNode(text)
const textNode = document.createTextNode("Hello, World!");

```

* **Clone Nodes**
Clones a node. If deep is true, it clones the element and all its children.
```js
const clone = document.getElementById("myElement").cloneNode(true);

```

* **Remove Elements**

```js
// Removes a child node from the DOM.
const parent = document.getElementById("parent");
const child = document.getElementById("child");
parent.removeChild(child);
```

```js
// Replaces a child node with a new node.
parent.replaceChild(newNode, oldNode);
```
### Methods for Event Handling
* **Add Event Listener**
```js
document.addEventListener("click", () => console.log("Document clicked!"));
```
* **Remove Element Listener**
```js
const myListener = () => console.log("Clicked!");
document.addEventListener("click", myListener);
document.removeEventListener("click", myListener);
```

### Methods to Access or Modify the Document Structure
* `document.write(string)` Writes HTML directly to the document (usually during page load
* `document.close()` Closes the document stream (used with document.write).
* `document.open()` Opens a new document stream for writing.

### Methonds for Cookies and Storage
* **cookie**
```js
document.cookie = "username=John; expires=Fri, 31 Dec 2025 12:00:00 UTC;";

```
### Methods to Access Metadata
* **document.title**

Gets or sets the title of the document.
```js
document.title = "New Page Title";
```
* **document.URL**

Returns the URL of the current document.
```js
console.log(document.URL);
```

* **document.referrer**

Returns the URL of the referring document.
```js
console.log(document.referrer);
```


