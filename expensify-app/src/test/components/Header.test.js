import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import Header from '../../components/Header.js';

test('Should render header correctly', () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<Header />);
    const renderOutput = renderer.getRenderOutput();
    // console.log(renderOutput);
    expect(renderOutput).toMatchSnapshot();
});