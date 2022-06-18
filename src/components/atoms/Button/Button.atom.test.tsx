// We're unit testing so this is fine.
/* eslint-disable @typescript-eslint/no-unsafe-call */

import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import renderer from 'react-test-renderer';
import Button from './Button.atom';

describe('Button regular component', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Button>Button Text</Button>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render correctly when there's no child component", () => {
    const tree = renderer.create(<Button />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly with text child and type', () => {
    const tree = renderer.create(<Button type="submit">Button Text</Button>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly when component is disabled', () => {
    const tree = renderer.create(<Button disabled>Button Text</Button>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should be able to fire onClick event', () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Button Text</Button>);
    fireEvent.click(screen.getByText('Button Text'));
    expect(onClick).toHaveBeenCalled();
  });

  it('should render correctly with small prop', () => {
    const tree = renderer.create(<Button small>Button Text</Button>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly with flat prop', () => {
    const tree = renderer.create(<Button flat>Button Text</Button>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Button Outlined component', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Button.Outlined>Button Text</Button.Outlined>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render correctly when there's no child component", () => {
    const tree = renderer.create(<Button.Outlined />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly with text child and type', () => {
    const tree = renderer
      .create(<Button.Outlined type="submit">Button Text</Button.Outlined>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly when component is disabled', () => {
    const tree = renderer.create(<Button.Outlined disabled>Button Text</Button.Outlined>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should be able to fire onClick event', () => {
    const onClick = jest.fn();
    const tree = renderer.create(<Button.Outlined onClick={onClick} />);
    tree.root.props.onClick();
    expect(onClick).toHaveBeenCalled();
  });

  it('should render correctly with small prop', () => {
    const tree = renderer.create(<Button.Outlined small>Button Text</Button.Outlined>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly with flat prop', () => {
    const tree = renderer.create(<Button.Outlined flat>Button Text</Button.Outlined>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Button Text component', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Button.Outlined>Button Text</Button.Outlined>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render correctly when there's no child component", () => {
    const tree = renderer.create(<Button.Text />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly with text child and type', () => {
    const tree = renderer.create(<Button.Text type="submit">Button Text</Button.Text>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly when component is disabled', () => {
    const tree = renderer.create(<Button.Text disabled>Button Text</Button.Text>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should be able to fire onClick event', () => {
    const onClick = jest.fn();
    const tree = renderer.create(<Button.Text onClick={onClick} />);
    tree.root.props.onClick();
    expect(onClick).toHaveBeenCalled();
  });

  it('should render correctly with small prop', () => {
    const tree = renderer.create(<Button.Text small>Button Text</Button.Text>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
