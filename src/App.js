import { Route, Routes } from 'react-router-dom';
import About from './About';
import EditPost from './EditPost';
import Home from './Home';
import Layout from './Layout';
import Missing from './Missing';
import NewPost from './NewPost';
import PostPage from './PostPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="post">
          <Route index element={<NewPost />} />
          <Route path=":id" element={<PostPage />} />
        </Route>
        <Route path="edit">
          <Route path=":id" element={<EditPost />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;
