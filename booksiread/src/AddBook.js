import { useState } from "react"
import "./Addbook.css"

function AddBook(props)
{
    
    var books=props.books
    var [enteredNewBook,setEnteredNewBook] = useState("")
    function handleChange(e)
    {
        setEnteredNewBook(e.target.value)
    }
    function addBook()
    {        
        props.setBooks([...books,{id:props.books.length+1,title:enteredNewBook}])
        fetch("http://localhost:3001/save",{
          method:"post",
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify({_id:Number(props.books[props.books.length-1]._id)+1,title:enteredNewBook})  
        })

        setEnteredNewBook("")
    }
    return(
        <div style={{display:"flex",justifyContent:"center",marginTop:"20px"}}>
        <div className="addbook-container">
        <input type="text" className="addbook-input" value={enteredNewBook} onChange={handleChange} placeholder="What's Next? "/>
        <button className="addbook-button" onClick={addBook}>Add Book</button>
        </div>
        </div>
    )
}

export default AddBook