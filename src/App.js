import Post from './Post.js';
import Posts from './Posts.js';

import './App.css';

const  App = () =>
    <div className="App">
      {Posts ? Posts.map((post, index) => <Post {...post} key={index}/>) : null}
    </div>


export default App;
