import React from 'react';
import expect from 'expect';
import {createRenderer} from 'react-addons-test-utils';

import expectJSX from 'expect-jsx';
expect.extend(expectJSX);

import TextInput from './TextInput';

describe('TextInput', () => {
  it('renders', () => {
    let renderer = createRenderer();
    renderer.render(
      <TextInput
        placeholder='Placeholder text…'
        defaultValue='Some default value'
        className='someFancyClassName'
        onChange={()=>{}}
      />
    );
    let actualElement = renderer.getRenderOutput();
    let expectedElement = (
      <input
        type='text'
        className='someFancyClassName'
        placeholder='Placeholder text…'
        defaultValue='Some default value'
        onChange={()=>{}}
      />
    );
    expect(actualElement).toEqualJSX(expectedElement);
  });
});
