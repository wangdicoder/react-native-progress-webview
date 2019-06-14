import React from 'react';
import {shallow} from 'enzyme';
import LoadingBar from '../lib/loading-bar';

describe('LoadingBar', () => {
	describe('Rendering', () => {
		it('should match to snapshot', () => {
			const component = shallow(<LoadingBar />);
			expect(component).toMatchSnapshot()
		});
	});
});
