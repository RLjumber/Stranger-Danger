import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
const BASE_URL = 'https://strangers-things.herokuapp.com/api';
const COHORT_NAME = '2209-FTB-ET-WEB-PT';


const SinglePostView = () => {

    const [posts, setPosts] = useState([]);
    const { id } = useParams();
    
    useEffect(() => {
        fetch(`${BASE_URL}/${COHORT_NAME}/posts`)
          .then(response => response.json())
          .then(result => {
            setPosts(result.data.posts);
            console.log('this is my data', result.data.posts);
          })
          .catch(console.error);
      }, []);

    
    const currentPost = posts.filter(post => post._id === id)

    console.log("currentPost: ", currentPost)

    
  return (
    <div>
        <ul>
            {currentPost.map(post => {
                <li>{post.title}</li>
            })}
        </ul>
        <span>
            <Link to="/posts">
                <button>Back to All Posts</button>
            </Link>
        </span>
    </div>
  )
}

export default SinglePostView;