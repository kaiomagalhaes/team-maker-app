import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import Page from '../index';

describe('Page', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<Page />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
