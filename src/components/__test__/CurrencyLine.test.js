import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Shallow from 'react-test-renderer/shallow';
import expect from 'expect';
import expectJSX from 'expect-jsx';

// Component
import CurrencyLine from '../CurrencyLine';

// Extends expect
expect.extend(expectJSX);

// Init Tap event
injectTapEventPlugin();

describe('CurrencyLine line tests', () => {
  const onChange = () => {
  };
  const floatingLabelText = 'EUR';
  let value = 0;


  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <CurrencyLine
        onChange={onChange}
        floatingLabelText={floatingLabelText}
        value={value}
      />, div);
  });

  it('should render the value ', () => {
    value = 100;
    const renderer = Shallow.createRenderer();
    renderer.render(
      <CurrencyLine
        onChange={onChange}
        floatingLabelText={floatingLabelText}
        value={value}
      />);
    const actual = renderer.getRenderOutput();

    renderer.render(
      <CurrencyLine
        onChange={onChange}
        floatingLabelText={floatingLabelText}
        value={100}
      />);

    const expected = renderer.getRenderOutput();
    expect(actual).toIncludeJSX(expected);
  });
});
