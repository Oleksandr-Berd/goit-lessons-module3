import { Container } from 'components/Container/Container';
import { Component } from 'react';
import { Post } from './Post/Post';

const POSTS = [
  {
    title: 'Vsevolodych is awesome1',
    likes: 100,
  },
  {
    title: 'Vsevolodych is awesome2',
    likes: 200,
  },
  {
    title: 'Vsevolodych is awesome3',
    likes: 300,
  },
  {
    title: 'Vsevolodych is awesome4',
    likes: 400,
  },
  {
    title: 'Vsevolodych is awesome5',
    likes: 500,
  },
  {
    title: 'Vsevolodych is awesome6',
    likes: 600,
  },
];

export class Posts extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    this.setState({ posts: POSTS });
  }

  render() {
    const { posts } = this.state;
    return (
      <div>
        <Container>
          {posts.map(({ title, likes }) => (
            <Post title={title} likes={likes} key={title} />
          ))}
        </Container>
      </div>
    );
  }
}

// export const Posts = () => {
//   return <div>{<Post />}</div>;
// };
