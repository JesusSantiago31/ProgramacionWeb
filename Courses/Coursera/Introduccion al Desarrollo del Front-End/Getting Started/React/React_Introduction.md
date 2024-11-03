# Introducing to React
 
[React Official Page](https://reactjs.org) 


React is a **library** for building composable user interfaces. It encourages the creation of reusable UI components which present data that changes over time.

React approaches building user interfaces differently by breaking them into components. This means React uses a real, full-featured programming language to render views, which we see as an advantage over templates for a few reasons:

* JavaScript is a flexible, powerful programming language with the ability to build abstractions. This is incredibly important in large applications.

* By unifying your markup with its corresponding view logic, React can actually make views easier to extend and maintain.

* By baking an understanding of markup and content into JavaScript, there’s no manual string concatenation and therefore less surface area for XSS vulnerabilities.

When your component is first initialized, the render method is called, generating a lightweight representation of your view. From that representation, a string of markup is produced and injected into the document. When your data changes, the render method is called again. In order to perform updates as efficiently as possible, we diff the return value from the previous call to render with the new one and generate a minimal set of changes to be applied to the DOM.

The data returned from render is neither a string nor a DOM node — it’s a lightweight description of what the DOM should look like.

We call this process reconciliation. Check out 
this jsFiddle
 to see an example of reconciliation in action.

Because this re-render is so fast (around 1ms for TodoMVC), the developer doesn’t need to explicitly specify data bindings. We’ve found this approach makes it easier to build apps.