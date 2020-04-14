import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { wrappedRenderer } from '../../__helpers__/wrappedRenderer';
import Resume from '../';

describe('Resume Component', () => {
  it('matches snapshot', () => {
    const component: renderer.ReactTestRenderer = wrappedRenderer(
      <Resume />
    );
    expect(component.toJSON())
      .toMatchSnapshot();
  });
});
