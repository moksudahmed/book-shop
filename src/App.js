import './App.css';
import {useSelector, useDispatch} from "react-redux";
import { useState } from 'react';
import { addBook, deleteBook } from './features/bookSlice';


function App() {
  const books = useSelector((state)=>state.booksReducer.books);
  const [title, setTitle] = useState("USA");
  const [author, setAuthor] = useState("Azad Ahmed");  

  const dispatch = useDispatch();

  const numberOfBooks = useSelector((state)=> state.booksReducer.books.length); 
  console.log(books);

  const handleSubmit = () =>{
    const book = {id: numberOfBooks + 1, title, author};
    dispatch(addBook(book));  
    console.log(book);
  }
  const handleDelete = () =>{
    dispatch(deleteBook(numberOfBooks + 1));
  }
  return (
    
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
          </tr>
        </thead>
        <tbody>
        
         {books.map((book)=>{
         const {id, title, author} = book;
         return ( 
          <tr key={id}> 
            <td>{id}</td>
            <td>{title}</td>
            <td>{author}</td>
          </tr>
         ) 

      })}
      </tbody>
      </table>
      <div>
        <button type='submit' onClick={handleSubmit}>Add</button>
      </div>
      <div>
        <button type='submit' onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

export default App;
