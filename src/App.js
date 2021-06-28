import React  from 'react';
import './App.css';
import Navbar from './components/navbar';
import BlogList from './components/blogs/bloglist';
const App = ()=> {
  return (
    <div className="App">
      <Navbar />
      <BlogList/>
    </div>
  );
}

export default App;


