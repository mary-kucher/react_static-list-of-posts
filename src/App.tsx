import React from 'react';
import './App.scss';
import postsFromServer from './api/posts';
import { PostList } from './components/PostList';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { Post } from './types/Post';
import { User } from './types/User';
import { Comment } from './types/Comment';

function getUser(userId: number): User | null {
  const foundUser = usersFromServer.find(user => user.id === userId);

  return foundUser || null;
}

function postComments(postId: number): Comment[] | [] {
  return commentsFromServer.filter(comment => postId === comment.postId);
}

export const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  user: getUser(post.userId),
  comments: postComments(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <div className="PostList">
      <PostList posts={posts} />
    </div>
  </section>
);
