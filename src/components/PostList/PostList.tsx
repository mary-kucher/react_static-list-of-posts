import React from 'react';
import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <ul className="PostList">
    {
      posts.map(post => (
        <PostInfo key={post.id} post={post} />
      ))
    }
  </ul>
);
