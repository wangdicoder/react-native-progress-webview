import React from 'react';
import { View, StyleSheet } from 'react-native';
import WebView from 'react-native-webview';
import PropTypes from 'prop-types';
import LoadingBar from "./loading-bar";

export default class ProgressBarWebView extends React.PureComponent {

	static propTypes = {
		color: PropTypes.string,
	};

	render() {
		return (
			<View style={styles.container}>
				<LoadingBar/>
				<WebView {...this.props} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		position: 'relative',
	},
});
