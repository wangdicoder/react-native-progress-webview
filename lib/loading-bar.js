import React from 'react';
import { View, StyleSheet } from 'react-native';
import * as PropTypes from 'prop-types';

const LoadingBar = ({ color, percent, height }) => {
	const style = {
		backgroundColor: color,
		width: `${percent * 100}%`,
		height,
	};
	return <View style={[styles.container, style]} />;
};

LoadingBar.propTypes = {
	color: PropTypes.string
};

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		zIndex: 10,
		top: 0,
		left: 0,
	},
});

export default LoadingBar;
