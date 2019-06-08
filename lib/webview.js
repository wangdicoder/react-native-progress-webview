import React from 'react';
import { View, StyleSheet } from 'react-native';
import WebView from 'react-native-webview';
import PropTypes from 'prop-types';
import LoadingBar from "./loading-bar";

export default class ProgressBarWebView extends React.PureComponent {

	static propTypes = {
		color: PropTypes.string,
		errorColor: PropTypes.string,
		disappearDuration: PropTypes.number,
		onLoadProgress: PropTypes.func,
		onError: PropTypes.func,
		onLoadStart: PropTypes.func,
		onLoadEnd: PropTypes.func,
	};

	static defaultProps = {
		color: '#3B78E7',
		errorColor: '#f30',
		disappearDuration: 300,
	};

	state = {
		percent: 0, //range:  0 - 1
		color: this.props.color,
		visible: false,
	};

	_onLoadProgress = (syntheticEvent) => {
		this.setState({ percent: syntheticEvent.nativeEvent.progress });
		const { onLoadProgress } = this.props;
		onLoadProgress && onLoadProgress(syntheticEvent);
	};

	_onError = (syntheticEvent) => {
		this.setState({ color: this.props.errorColor, percent: 1 });
		const { onError } = this.props;
		onError && onError(syntheticEvent);
	};

	_onLoadStart = (syntheticEvent) => {
		this.setState({ visible: true });
		const { onLoadStart } = this.props;
		onLoadStart && onLoadStart(syntheticEvent);
	};

	_onLoadEnd = (syntheticEvent) => {
		const { onLoadEnd, disappearDuration } = this.props;
		this.timer = setTimeout(() => {
			this.setState({ visible: false });
		}, disappearDuration);
		onLoadEnd && onLoadEnd(syntheticEvent);
	};

	componentWillUnmount(): void {
		clearTimeout(this.timer);
	}

	render() {
		const { percent, color, visible } = this.state;
		return (
			<View style={styles.container}>
				{visible && <LoadingBar color={color} percent={percent}/>}
				<WebView
					onLoadStart={this._onLoadStart}
					onLoadEnd={this._onLoadEnd}
					onLoadProgress={this._onLoadProgress}
					onError={this._onError}
					{...this.props}
				/>
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
