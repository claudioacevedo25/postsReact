import React from 'react';
import Post from './Components/Post';
import posts from './data/posts.json';
import './App.css';

function App() {
  return (
    <div className="App">
       <h1>Mi posts </h1>
       <p>Hay {posts.length} posts en total</p>
          {
            posts.map((post,index) => <Post data={post} key={index} />)
          }
  
    </div>
  )
}

export default App;
