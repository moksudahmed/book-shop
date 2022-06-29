import axios from "axios";

const {createSlice, createAsyncThunk } = require("@reduxjs/toolkit"); 

export const fetchPosts = createAsyncThunk(
        "posts/fetchPosts", async ()=>{
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts');            
            return res.data;
        });

const postSlicer = createSlice({
    name: "posts",
    initialState:{
        isLoading: false,
        posts:[],
        error: null
    },
    extraReducers: (builder) =>{
        builder.addCase(fetchPosts.pending, (state)=>{
            state.isLoading = true;
            
        });
        builder.addCase(fetchPosts.fulfilled, (state, actions)=>{
            state.isLoading = false;
            state.posts = actions.payload;
            state.error = null;
        })
        builder.addCase(fetchPosts.rejected, (state, actions)=>{
            state.isLoading = false;
            state.posts = [];
            state.error = actions.error.message;
        })
    }


});


export default postSlicer.reducer;