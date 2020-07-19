import React, {Component} from 'react'
import axios from 'axios'

export default class UpdateBook extends Component{
    state = {
        'title':'',
        'description':'',
        'author':'',
        'price':0,
        'qty':0
    }

    handlerChange = (e) =>{
        this.setState({ [e.target.name] : e.target.value })
    }

     componentDidMount = async() =>{
        const id = this.props.match.params.id
        const res = await axios.get('http://localhost:8080/api/books/'+id) //Url API kita
        this.setState({
            id:res.data.id,
            title:res.data.title,
            description:res.data.description,
            author:res.data.author,
            price:res.data.price,
            qty:res.data.qty
        })
        console.log(this.state, "ss")
     }

     handlerSubmit = async (event) =>{
        event.preventDefault();
        console.log(this.state, "ss")
        const id = this.props.match.params.id
        await axios.put('http://localhost:8080/api/books/'+id, this.state)
        this.props.history.push('/')
    }

    render(){
        return(
            <div className="container">
                <h2>Halaman Update</h2>

                <form onSubmit={this.handlerSubmit}>
                    <table>
                        <tbody>
                        <tr>
                            <td>Book Title</td>
                            <td><input type="text" name="title" value={this.state.title} onChange={this.handlerChange}/></td>
                        </tr>
                        <tr>
                            <td>Description</td>
                            <td><input type="text" name="description" value={this.state.description} onChange={this.handlerChange}/></td>
                        </tr>
                        <tr>
                            <td>Author</td>
                            <td><input type="text" name="author" value={this.state.author} onChange={this.handlerChange}/></td>
                        </tr>
                        <tr>
                            <td>Book Price</td>
                            <td><input type="text" name="price" value={this.state.price} onChange={this.handlerChange}/></td>
                        </tr>
                        <tr>
                            <td>Book Price</td>
                            <td><input type="text" name="qty" value={this.state.qty} onChange={this.handlerChange}/></td>
                        </tr>
                        <tr>
                            <td colSpan="2"><input type="submit" value="Update"/></td>
                        </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        )
    }
}