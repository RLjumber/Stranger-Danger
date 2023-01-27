// rafce shortcut for react template
import { Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Posts from "./components/Posts";
import Profile from "./components/Profile";
import SignUp from "./components/SignUp";
import Login from './components/Login';

function App() {
  return (
    <div className="App">

     <Navbar />

     <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="profile" element={<Profile />}></Route>
        <Route path="posts" element={<Posts />}></Route>
     </Routes>

    </div>
  );
}

export default App;
