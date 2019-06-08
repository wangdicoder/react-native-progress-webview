# React Native Progress WebView

![npm](https://img.shields.io/npm/dy/react-native-progress-webview.svg) ![npm](https://img.shields.io/npm/v/react-native-progress-webview.svg) ![Libraries.io dependency status for GitHub repo](https://img.shields.io/librariesio/github/wangdicoder/react-native-progress-webview.svg) [![star this repo](http://githubbadges.com/star.svg?user=wangdicoder&repo=react-native-progress-webview&style=flat)](https://github.com/wangdicoder/react-native-progress-webview) ![NPM](https://img.shields.io/npm/l/react-native-progress-webview.svg) 

**React Native Progress WebView** is a wrapper of [React Native WebView](https://github.com/react-native-community/react-native-webview) to provide the loading status.

<img src="https://raw.githubusercontent.com/wangdicoder/react-native-progress-webview/master/screenshot.gif" width="326" height="576" />

## Platforms Supported

- [x] iOS (both UIWebView and WKWebView)
- [x] Android

## Getting Started

Read our [Getting Started Guide](https://github.com/react-native-community/react-native-webview) on React Native WebView page to configure the webview component.

## Usage

Import the `WebView` component from `react-native-webview` and use it like so:

```jsx
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ProgressWebView from "react-native-progess-webview";

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

| prop              | type   | default | description                                             |
| ----------------- | ------ | ------- | ------------------------------------------------------- |
| color             | string | #3B78E7 | normal color of loading bar                             |
| errorColor        | string | #f30    | error color of loading bar                              |
| disappearDuration | number | 300     | the visible duration after loading bar loading finished |

## License

MIT
