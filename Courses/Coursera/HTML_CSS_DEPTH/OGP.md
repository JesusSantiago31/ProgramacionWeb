# OGP (Open Graphic Protocol)
## Social Media Cards


When we create the **social media** cards enable to the final users give them a previsualization of the website when someone share the siteweb URL

### Meta Tags Structure

```html
<meta property="og:name_of_the_property" content="value_of_the_property">

```
#### Example of use of the OGP

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    
    <meta property="og:title" content="Our Menu">
    

    
</head>
<body>
    
</body>
</html>
```

## Type of Meta Tags

#### Basic Metadata

To turn your web pages into graph objects, you need to add basic metadata to your page. We've based the initial version of the protocol on RDFa which means that you'll place additional <meta> tags in the <head> of your web page. The four required properties for every page are:

* **og:title** - The title of your object as it should appear within the graph, e.g., "The Rock".
* **og:type** - The type of your object, e.g., "video.movie". Depending on the type you specify, other properties may also be required.
* **og:image** - An image URL which should represent your object within the graph.
* **og:url** - The canonical URL of your object that will be used as its permanent ID in the graph, e.g., "https://www.imdb.com/title/tt0117500/".

#### Optional Metadata
The following properties are optional for any object and are generally recommended:

* **og:audio** - A URL to an audio file to accompany this object.
* **og:description** - A one to two sentence description of your object.
* **og:determiner** - The word that appears before this object's title in a sentence. An enum of (a, an, the, "", auto). If auto is chosen, the consumer of your data should choose between "a" or "an". Default is "" (blank).
* **og:locale** - The locale these tags are marked up in. Of the format language_TERRITORY. Default is en_US.
* **og:locale**  alternate - An array of other locales this page is available in.
* **og:site_name** - If your object is part of a larger web site, the name which should be displayed for the overall site. e.g., "IMDb".
* **og:video** - A URL to a video file that complements this object.

