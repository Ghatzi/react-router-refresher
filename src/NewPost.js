import { format } from 'date-fns';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from './api/posts';
import DataContext from './context/DataContext';

const NewPost = () => {
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const { posts, setPosts } = useContext(DataContext);
  const navigation = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const newPost = {
      id,
      title: postTitle,
      datetime: datetime,
      body: postBody
    };

    try {
      const response = await api.post('/posts', newPost);
      const allPosts = [...posts, response.data];
      setPosts(allPosts);
      setPostTitle('');
      setPostBody('');
      navigation('/');
    } catch (err) {
      console.log(`Error ${err.message}`);
    }
  };

  return (
    <main className="NewPost">
      <h2>New Post</h2>
      <form className="newPostForm" onSubmit={handleSubmit}>
        <label htmlFor="postTitle">Title:</label>
        <input
          type="text"
          id="postTitle"
          value={postTitle}
          onChange={e => setPostTitle(e.target.value)}
          required
        />

        <label htmlFor="postBody">Body:</label>
        <textarea
          id="postBody"
          value={postBody}
          onChange={e => setPostBody(e.target.value)}
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default NewPost;
