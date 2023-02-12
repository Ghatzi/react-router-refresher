import { format } from 'date-fns';
import { useStoreActions, useStoreState } from 'easy-peasy';
import { useNavigate } from 'react-router-dom';

const NewPost = () => {
  const posts = useStoreState(state => state.posts);
  const postTitle = useStoreState(state => state.postTitle);
  const postBody = useStoreState(state => state.postBody);
  const savePost = useStoreActions(actions => actions.savePost);
  const setPostTitle = useStoreActions(actions => actions.setPostTitle);
  const setPostBody = useStoreActions(actions => actions.setPostBody);
  const navigation = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const newPost = {
      id,
      title: postTitle,
      datetime: datetime,
      body: postBody
    };

    savePost(newPost);
    navigation('/');
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
