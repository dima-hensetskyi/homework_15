import Post from './Post.js';
import Posts from './Posts.js';

import './App.css';

const  App = () => {
  return (
    <div className="App">
      {Posts.map((post, index) => <Post {...post} key={index}/>)}
    </div>
  );
}

export default App;
