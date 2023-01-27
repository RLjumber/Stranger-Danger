import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav>
            <h2>Stranger's Things</h2>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/signup">Sign Up</a>
                </li>
                <li>
                    <a href="/login">Login</a>
                </li>
                <li>
                    <a href="/profile">Profile</a>
                </li>
                <li>
                    <a href="/posts">Posts</a>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar;