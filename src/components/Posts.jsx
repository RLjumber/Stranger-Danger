import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const BASE_URL = 'https://strangers-things.herokuapp.com/api';
const COHORT_NAME = '2209-FTB-ET-WEB-PT';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [filter, setFilter] = useState({ title: '', price: '' });

  useEffect(() => {
    fetch(`${BASE_URL}/${COHORT_NAME}/posts`)
      .then(response => response.json())
      .then(result => {
        setPosts(result.data.posts);
        setFilteredPosts(result.data.posts);
        console.log('this is my data', result.data.posts);
      })
      .catch(console.error);
  }, []);

  const handleFilterChange = e => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  useEffect(
    () => {
      setFilteredPosts(
        posts.filter(post => {
          if (filter.title && post.title !== filter.title) {
            return false;
          }
          if (filter.price && post.price !== filter.price) {
            return false;
          }
          return true;
        })
      );
    },
    [filter, posts]
  );

  return (
    <div className="posts-container">
      <h1>Filter By Title or price</h1>
      <div>
        <label>
          title:
          <input
            type="text"
            name="title"
            value={filter.title}
            onChange={handleFilterChange}
          />
        </label>
        <label>
          Price:
          <input
            type="text"
            name="price"
            value={filter.price}
            onChange={handleFilterChange}
          />
        </label>
      </div>
      <ul>
        {filteredPosts.map(post => {
          return (
            <li key={post._id} className="post-card">
              <p>
                {post.title}
              </p>
              <p>
                {post.description}
              </p>
              <p>
                {post.price}
              </p>
              <p>
                {post.location}
              </p>
              <p>
                {post.willDeliver}
              </p>
              <p>
                {post.author.username}
              </p>
              <Link to={`/posts/${post._id}`}>
                <button className="btn">View Post</button>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Posts;