import React from 'react';
import renderer from 'react-test-renderer';
import { Post } from '../../../models/Post.model';
import SinglePost from './SinglePost.molecule';

const testPost: Post = {
  id: 1,
  title: 'test',
  body: 'test',
  userId: 1,
};

describe('Single post component', () => {
  it('should be able to render correctly', () => {
    const tree = renderer.create(<SinglePost isLoading={false} data={testPost} />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should be able to render loading view correctly', () => {
    const tree = renderer.create(<SinglePost isLoading data={testPost} />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("should be able to render loading view when there's no data", () => {
    const tree = renderer.create(<SinglePost isLoading={false} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
