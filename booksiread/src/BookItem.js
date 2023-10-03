import { useState } from "react"
function BookItem(props)
{
    var [enteredvalue,setEnteredvalue] = useState(props.book.title)
    var [flagvalue,setFlagvalue]=useState(false)

    function handleChange(e)
    {
        setEnteredvalue(e)

    }
    function updateText(e)
    {
        setEnteredvalue(e.target.value)
    }

    function deleteItem(_id)
    {
        var temp = props.books.filter((book)=>{
            if(book._id!=_id)
            {
                return true
            }
        })
        props.setBooks(temp)

        fetch("http://localhost:3001/delete?_id="+_id)


    }

    function update(_id)
    {
       
        var temp = props.books.map((book)=>{
            if(book._id===_id)
            {
                
                return({_id:book._id,title:enteredvalue})

            }
            else{
                return book
            }
        })
        console.log(temp)
        props.setBooks(temp)

        fetch("http://localhost:3001/update?_id="+_id+"&title="+enteredvalue)
    }

    return(
        <div className="booklist-container">
        <div  className="booklist-item-container">
          <input type="text" className={flagvalue?"booklist-input":"hide booklist-input"} value={enteredvalue} onChange={updateText} ></input>
           <h1  className={flagvalue?"hide":""}>{props.book.title}</h1>
           <div style={{display:"flex"}}>
           <button  className={flagvalue?"hide edit-button":"edit-button"} onClick={()=>{setFlagvalue(true)}}>Edit</button>
           <button  className={flagvalue?"edit-button":"hide edit-button"} onClick={()=>{setFlagvalue(false); update(props.book._id)}}>Update</button>
           <button className="delete-button" onClick={()=>deleteItem(props.book._id)}>Delete</button>
           </div>
        </div>
        </div>
    )
}

export default BookItem
