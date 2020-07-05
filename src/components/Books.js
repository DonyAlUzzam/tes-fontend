import React, { Component } from 'react'
import axios from 'axios'
import CardBook from './CardBook'

export default class Book extends Component{

    state = {
        book:[]
    }

    componentDidMount = async() =>{
       await axios.get('http://localhost:8080/api/books/') //Url API kita
        .then(response => this.setState({
            book:response.data
        }))
        console.log(this.state)
    }


    render(){

        const renderData = this.state.book.map(book => {
            return(
                <CardBook book={book} key={book.id} refresh={this.componentDidMount}/>
            )
        })
        return (
            <div className="container">
                <div className="row">
                    {renderData}
                </div>
            </div>
        )
    }
}



