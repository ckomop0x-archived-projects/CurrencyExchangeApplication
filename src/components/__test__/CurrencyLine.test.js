import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import CurrencyLine from '../CurrencyLine';

configure({ adapter: new Adapter() });

describe('<CurrencyLine />', () => {
  const onChange = jest.fn();
  const floatingLabelText = 'EUR';

  it('Should render without crashing', () => {
    const value = 0;
    const wrapper = shallow(
      <CurrencyLine onChange={onChange} floatingLabelText={floatingLabelText} value={value} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('Should render with the value 100', () => {
    const value = 100;
    const wrapper = shallow(
      <CurrencyLine onChange={onChange} floatingLabelText={floatingLabelText} value={value} />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
