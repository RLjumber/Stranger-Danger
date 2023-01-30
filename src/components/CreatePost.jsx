import React, { useState, useEffect } from 'react';
const BASE_URL = 'https://strangers-things.herokuapp.com/api';
const COHORT_NAME = '2209-FTB-ET-WEB-PT';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [willDeliver, setWillDeliver] = useState(false);
  const [author, setAuthor] = useState('');
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [post, setPost] = useState({});

  useEffect(
    () => {
      const token = localStorage.getItem('token');

      if (token) {
        localStorage.setItem('token', token);
      } else {
        localStorage.removeItem('token');
      }
    },
    [token]
  );

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const response = await fetch(`${BASE_URL}/${COHORT_NAME}/posts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          post: {
            title,
            description,
            price,
            willDeliver,
            author
          }
        })
      });

      console.log(response);
      const { data } = await response.json();
      setPost(data.post);

      console.log(data.post);
      console.log('New post has been added!');
    } catch (error) {
      console.error(error);
      console.log('failed to add a new post !');
    }
    setAuthor('');
    setDescription('');
    setLocation('');
    setPrice('');
    setTitle('');
  };

  return (
    <div>
      <h2>Add post</h2>
      <form onSubmit={handleSubmit} className="sign-up-form">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />

        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />

        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={e => setLocation(e.target.value)}
        />

        <label htmlFor="Price">Price</label>
        <input
          type="text"
          id="Price"
          value={price}
          onChange={e => setPrice(e.target.value)}
        />

        <label htmlFor="author">Author</label>
        <input
          type="text"
          id="author"
          value={author}
          onChange={e => setAuthor(e.target.value)}
        />

        <label htmlFor="willDeliver">Will deliver</label>
        <input
          type="checkbox"
          id="title"
          value={willDeliver}
          onChange={e => setWillDeliver(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreatePost;