import React from 'react';
import renderer from 'react-test-renderer';
import Header from './Header';

jest.mock('./Menu/Menu', () => 'menu');
jest.mock('../Image/Image', () => 'image');

const onSectionChange = () => () => null;

describe('Header component', () => {
  it('renders with props', () => {
    const component = renderer.create(<Header onSectionChange={onSectionChange} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders without crashing', () => {
    const component = renderer.create(<Header />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
