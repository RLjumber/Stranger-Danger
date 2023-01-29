import React, { useState, useEffect } from 'react';

const BASE_URL = 'https://strangers-things.herokuapp.com/api/';
const COHORT_NAME = '2209-FTB-ET-WEB-PT';

const CreatePost = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [location, setLocation] = useState("");
    const [willDeliver, setWillDeliver] = useState(false);
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [author, setAuthor] = useState("");
    const [post, setPost] = useState({});

    useEffect(() => {
        const token = localStorage.getItem('token');

        if(token) {
            localStorage.setItem('token', token);
        } else {
            localStorage.removeItem('token');
        }
    }, [token]);

    const handleSubmit = async event => {
        event.preventDefault();

        try {
            const response = await fetch(`${BASE_URL}${COHORT_NAME}/posts`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
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
            })
            console.log(response);
            const { data } = await response.json();
            setPost(data.post);
            console.log(data.post);
            console.log("Post Created!")

        } catch (error) {
            console.error(error);
            console.log("Error creating posts")
        }
        setTitle('');
        setAuthor('')
        setDescription('');
        setPrice('');
        setLocation('');
    }; 

  return (
    <div>
        <h2>Create Post</h2>
        <form onSubmit={handleSubmit()} className="sign-up-form">

            <label htmlFor='title'>Title</label>
            <input 
            type="text"
            id="title"
            value={title}
            onChange={event => setTitle(event.target.value)}
            />

            <label htmlFor='description'>Description</label>
            <input 
            type="text"
            id="description"
            value={description}
            onChange={event => setDescription(event.target.value)}
            />

            <label htmlFor='price'>Price</label>
            <input 
            type="text"
            id="price"
            value={price}
            onChange={event => setPrice(event.target.value)}
            />

            <label htmlFor='location'>Location</label>
            <input 
            type="text"
            id="location"
            value={location}
            onChange={event => setLocation(event.target.value)}
            />  

            <label htmlFor='willDeliver'>Will Deliver?</label>
            <input 
            type="checkbox"
            id="willDeliver"
            value={willDeliver}
            onChange={event => setWillDeliver(event.target.value)}
            />

            <label htmlFor='author'>Author</label>
            <input 
            type="text"
            id="author"
            value={author}
            onChange={event => setAuthor(event.target.value)}
            />

            <button type="submit">Create Post</button>

        </form>
    </div>
  )
}

export default CreatePost;