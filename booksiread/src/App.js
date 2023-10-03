import TitleBar from "./TitleBar";
import "./App.css"
import AddBook from "./AddBook";
import BookList from "./BookList";
import { useEffect, useState } from "react";
function App() {

  var [books,setBooks] = useState([{_id:1,title:"No Book is loaded yet"}])

  

  useEffect(()=>{
// Make a GET request using the fetch API
fetch("http://localhost:3001/")
  .then(response => {
    // Check if the response status is OK (200)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    // Parse the response JSON
    return response.json();
  })
  .then(data => {
    // Handle the JSON data here
    setBooks(data)
  })
  .catch(error => {
    // Handle any errors that occurred during the fetch
    console.error('Fetch error:', error);
  });

  },[])

  
  return (
    <div>
    <TitleBar/>
    <AddBook books={books} setBooks={setBooks}/>
    <BookList books={books} setBooks={setBooks}/>
    </div>
    )
}

export default App;
