import React from 'react';
import renderer from 'react-test-renderer';
import LoginForm from './LoginForm.organism';

const testConfig = {
  initialValues: {
    username: '',
    password: '',
  },
  onSubmit: () => {},
};

describe('Login form component', () => {
  it('should be able to render correctly with false loading prop', () => {
    const tree = renderer.create(<LoginForm isLoading={false} formConfig={testConfig} />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should be able to render correctly with true loading prop', () => {
    const tree = renderer.create(<LoginForm isLoading formConfig={testConfig} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
