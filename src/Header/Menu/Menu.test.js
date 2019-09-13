import React from 'react';
import renderer from 'react-test-renderer';
import Menu from './Menu';

const onSectionChange = () => () => null;

describe('Menu component', () => {
  it('renders with props', () => {
    const component = renderer.create(<Menu onSectionChange={onSectionChange} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders without crashing', () => {
    const component = renderer.create(<Menu />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
