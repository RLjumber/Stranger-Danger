import React from 'react';
import { Link } from 'react-router-dom';
import Posts from './Posts';

const SinglePostView = () => {

    const getPostById = async (posts) => {
        const currentPost = posts.map()
    }


  return (
    <div>
        <h2></h2>

        <Link to="/posts">
            <button>Back to All Posts</button>
        </Link>
    </div>
  )
}

export default SinglePostView;