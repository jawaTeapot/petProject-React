import React from 'react';
import {Routes, Route} from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import PostIdPage from "../pages/PostIdPage";

const AppRouter = () => {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<About/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/posts" element={<Posts/>}/>
                <Route path="/posts/:id" element={<PostIdPage/>}/>
                <Route path="*" element={<Error/>}/>
            </Routes>
        </div>
    );
};

export default AppRouter;
