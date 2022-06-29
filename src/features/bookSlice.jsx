const {createSlice} = require("@reduxjs/toolkit"); 

const initialBooks = {
    books:[
        {id:1, title:"Bangladesh", author:"Moksud Ahmed"},
        {id:2, title:"UK", author:"Fuad Ahmed"}
    ],
};



const bookSlice = createSlice({
    name:"books",
    initialState: initialBooks,
    reducers:{
        showBooks: (state) => state,
        addBook : (state, actions) =>{
            state.books.push(actions.payload)            
        },
        deleteBook: (state, actions) =>{
            state.books.pop(actions.payload);
          
        } 
    }
});

export const {showBooks, addBook, deleteBook} = bookSlice.actions;

export default bookSlice.reducer;



