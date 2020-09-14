# react-emojis-app

Emojis have become part of modern day society, and most of developers start use it to get nice touch in their apps.
That is why this package will help you add emojis in the fastest and cleanest way.

# Why ? 🤔

Using emojis in react with copy paste directly into the JSX of your React component will throws an ESLint error, and this is not good for your app and bad way to do it like this.

# Installation

`npm i react-emojis-app`

# Use

import Emojis from **react-emojis-app** and add it to your code.

Example:

```javascript
import ReactDOM from "react-dom";
import React, { Component } from "react";
import Emojis from "react-emojis-app";

class MyComponent extends Component {
  render() {
    return (
      <div>
        Im ready to use the react-emojis-app <Emojis data="FLEXED_BICEPS" />
      </div>
    );
  }
}

ReactDOM.render(<MyComponent />, document.getElementById("app"));

// You would see the result rendered on the screen like this:
// Im ready to use the react-emojis-app 💪
```

You can change the font size as you want for any emoji by adding the attribute 'fontSize'.

Example:

```javascript
<Emojis data="RED_HEART" fontSize="32px" />
```

There are 4 ways To add Emojis in your app

## 1- Pick up emojis

Pick up emojis from the website in fast and cleaner way.

From here: [https://react-emojis-app.netlify.app](https://react-emojis-app.netlify.app).

Just one click in any emoji you like it, and paste the code to your component 👌

## 2- Emojis on your own

If you have an emoji that you didn't find on the website and you want to use it in a cleaner way in your component, use it like this.

```javascript
<Emojis symbol="💎" label="Describe your emoji" />
```

**symbol**: in this attribute put your emoji.

**label**: in this attribute give your emoji a description.

## 3- Render Emojis as SVG

You can render Emojis as SVG and ensure emoji compatibility with all devices without worries.

Just by adding the attribue **svg** and passing **true** value.

Example:

```javascript
<Emojis data="PARTYING_FACE" svg={true} />
```

Change the size for any emojis as svg by adding the attribute **width**:

```javascript
<Emojis data="PARTYING_FACE" svg={true} width="38px" />
```

## 4- Render Emojis as SVG by its unicode

You can render Emojis by its unicode.

Example:

```javascript
React Em<Emojis unicode="1f60d" />jis // letters should be in lowercase
```

Output:

React Em😍jis

# License

MIT
