import { format } from 'date-fns';
import { useStoreActions, useStoreState } from 'easy-peasy';
import { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const EditPost = () => {
  const editTitle = useStoreState(state => state.editTitle);
  const editBody = useStoreState(state => state.editBody);
  const getPostById = useStoreState(state => state.getPostById);
  const setEditTitle = useStoreActions(actions => actions.setEditTitle);
  const setEditBody = useStoreActions(actions => actions.setEditBody);
  const editPost = useStoreActions(actions => actions.editPost);
  const { id } = useParams();
  const post = getPostById(id);
  const navigation = useNavigate();

  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  }, [post, setEditTitle, setEditBody]);

  const handleEdit = id => {
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const updatedPost = {
      id,
      title: editTitle,
      datetime: datetime,
      body: editBody
    };

    editPost(updatedPost);
    navigation(`/post/${id}`);
  };

  return (
    <main className="NewPost">
      {editTitle && (
        <>
          <h2>Edit Post</h2>
          <form className="newPostForm" onSubmit={e => e.preventDefault()}>
            <label htmlFor="postTitle">Title:</label>
            <input
              type="text"
              id="postTitle"
              value={editTitle}
              onChange={e => setEditTitle(e.target.value)}
              required
            />

            <label htmlFor="postBody">Body:</label>
            <textarea
              id="postBody"
              value={editBody}
              onChange={e => setEditBody(e.target.value)}
              required
            ></textarea>
            <button type="button" onClick={() => handleEdit(post.id)}>
              Submit
            </button>
          </form>
        </>
      )}
      {!editTitle && (
        <>
          <h2>Post Not Found</h2>
          <p>Well, that's disappointing</p>
          <p>
            <Link to="/">Visit Our Homepage</Link>
          </p>
        </>
      )}
    </main>
  );
};

export default EditPost;
