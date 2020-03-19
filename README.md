# React Native Progress WebView

![npm](https://img.shields.io/npm/dy/react-native-progress-webview.svg) ![npm](https://img.shields.io/npm/v/react-native-progress-webview.svg) [![star this repo](http://githubbadges.com/star.svg?user=wangdicoder&repo=react-native-progress-webview&style=flat)](https://github.com/wangdicoder/react-native-progress-webview) ![GitHub](https://img.shields.io/github/license/wangdicoder/react-native-progress-webview.svg)

**React Native Progress WebView** is a wrapper of [React Native WebView](https://github.com/react-native-community/react-native-webview) to provide a loading bar on the top of the browser.

<img src="https://raw.githubusercontent.com/wangdicoder/react-native-progress-webview/master/screenshot.gif" width="326" height="576" />

## Platforms Supported

- [x] iOS (both UIWebView and WKWebView)
- [x] Android

## Getting Started

Firstly, read the [Getting Started Guide](https://github.com/react-native-community/react-native-webview) on React Native WebView page to configure the webview component.

Then
```bash
$ npm install --save react-native-progress-webview
```

## Usage

Import the `ProgressWebView` component from `react-native-progress-webview` and use it like so:

```jsx
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ProgressWebView from "react-native-progress-webview";

// ...
class App extends Component {
  render() {
    return (
      <ProgressWebView source={{ uri: 'https://facebook.github.io/react-native/' }} />
    );
  }
}
```

## API

**React Native Progress Webview** supports all React Native Webview props. Read the [API Reference](https://github.com/react-native-community/react-native-webview/blob/master/docs/Reference.md) to explore. There are a couple of exclusive props related to the loading bar.

| prop              | type   | default | description                                                 |
| ----------------- | ------ | ------- | ----------------------------------------------------------- |
| height            | number | 3       | the height of loading bar                                   |
| color             | string | #3B78E7 | the normal color of loading bar                             |
| errorColor        | string | #f30    | the error color of loading bar                              |
| disappearDuration | number | 300     | the visible duration after the webview finishes the loading |

## Common issues

#### How can I use `ref` to get WebView methods?

It's same as using raw WebView. You can just pass a `ref` prop to get the instance.

```jsx
class App extends Component {
  constructor(props){
    super(props);
    this.ref = React.createRef();
  }

  componentDidMount() {
    console.log(this.ref.current);
  }

  render() {
    return (
      <ProgressWebView
        ref={this.ref}
        source={{ uri: 'https://facebook.github.io/react-native/' }} 
      />
    );
  }
}
```

## License

MIT
