import React from 'react';
import expect from 'expect';
import {createRenderer} from 'react-addons-test-utils';

import expectJSX from 'expect-jsx';
expect.extend(expectJSX);

import Label from './Label';

describe('Label', () => {
  it('renders', () => {
    let renderer = createRenderer();
    renderer.render(
      <Label
        for='myId'
        value='My value'
        className='someFancyClassName'
      />
    );
    let actualElement = renderer.getRenderOutput();
    let expectedElement = (
      <label
        className='someFancyClassName'
        htmlFor='myId'>
        My value
      </label>
    );
    expect(actualElement).toEqualJSX(expectedElement);
  });
});
