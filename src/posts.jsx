import React, { useEffect } from "react";

import {useSelector, useDispatch} from "react-redux";
import { useState } from 'react';
import { fetchPosts } from "./features/postSlice";

const Posts = () =>{
 
 const {isLoading, posts, error }= useSelector((state)=> state.posts);
 const dispatch = useDispatch();

useEffect(()=>{
    dispatch(fetchPosts())
},[]);

    return (
        <div>Posts
        {isLoading && <h3>Loading...</h3>}
        {error && <h3>{error}</h3>}
        <section>
            {posts && posts.map((post)=>{
            return <article key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
                </article>
        })}
        </section>
        </div>
        
    );
};


export default Posts;