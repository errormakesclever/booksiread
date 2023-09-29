import { useState } from "react"
import BookItem from "./BookItem"
import "./BookList.css"
function BookList(props)
{
    
    
    
    return (
        <div  style={{display:"flex",justifyContent:"center",marginTop:"20px",flexWrap:"wrap",gap:"20px"}}>
       
        {props.books.map(function(book,index){
          return(
            <BookItem key={index} books={props.books} book={book} setBooks={props.setBooks}/>
         )
        })
       }
      
       </div>
    )
}
export default BookList