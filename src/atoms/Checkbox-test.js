import React from 'react';
import expect from 'expect';
import {createRenderer} from 'react-addons-test-utils';

import expectJSX from 'expect-jsx';
expect.extend(expectJSX);

import Checkbox from './Checkbox';

describe('Checkbox', () => {
  it('renders', () => {
    let renderer = createRenderer();
    renderer.render(
      <Checkbox
        checked={true}
        ref='wat'
        id='myId'
      />
    );
    let actualElement = renderer.getRenderOutput();
    let expectedElement = (
      <input
        checked={true}
        type='checkbox'
        id='myId'
        onChange={()=>{}}
      />
    );
    expect(actualElement).toEqualJSX(expectedElement);
  });
});
