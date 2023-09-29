import "./TitleBar.css"
function TitleBar()
{
    return(
        <div className="title-bar">
            <h1 className="title-heading">
                <span>books</span>
                <b className="title-i">I</b>
                <span>read</span>
                </h1>
             
             <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
                <h4>Agnel John</h4>
                <i className="fa-solid fa-user" style={{color: "#ffffff",fontSize:"20px"}}></i>
             </div>
        </div>       
    )
}

export default TitleBar