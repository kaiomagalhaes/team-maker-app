import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import Header from '../index';

describe('Header', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<Header />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
