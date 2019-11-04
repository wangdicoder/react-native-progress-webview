import React from 'react';
import { shallow } from 'enzyme';
import WebView from '../lib/webview';

describe('WebView', () => {
	describe('Rendering', () => {
		it('should match to snapshot', () => {
			const component = shallow(<WebView source={{ uri: 'https://www.google.com.au' }}/>);
			expect(component).toMatchSnapshot()
		});
	});

	describe('function callback', () => {
		it('should call onLoadProgress', () => {
			const onLoadProgress = jest.fn();
			shallow(
				<WebView
					source={{ uri: 'https://www.google.com.au' }}
					onLoadProgress={onLoadProgress}
				/>
			);

			expect(onLoadProgress).toBeCalled();
		});
	});
});
