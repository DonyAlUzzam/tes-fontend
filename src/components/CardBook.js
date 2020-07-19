import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

function CardBook({book, refresh}){
   async function deleteBook(){
       await axios.delete('http://localhost:8080/api/books/'+book.id)
       return refresh()
    }

    return(
        <div className="col-md-4 card" style={{margin:5}}>
            <h3>Title: {book.title}</h3>
            <small>Desc: {book.description}</small>
            <h3>Harga: {book.price}</h3>
            <h4>Author: {book.author}</h4>
            <img src={`http://localhost:8080/static/images/${book.image.substring(5)}`} style={{width:250}}></img>
            <hr/>
                <Link to={"/edit/" + book.id}>
                 <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                </Link>
                <i className="fa fa-trash" aria-hidden="true" onClick={deleteBook}></i>
            <br/>
        </div>
    )
}

export default CardBook