import React from 'react';
import { Post } from '../../../models/Post.model';

interface Props {
  data?: Post;
  isLoading: boolean;
}

export default function SinglePost({ data, isLoading }: Props) {
  if (isLoading || !data) {
    return <div>Loading...</div>;
  }

  return <div>{data.title}</div>;
}
