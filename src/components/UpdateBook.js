import React, {Component} from 'react'
import axios from 'axios'

export default class UpdateBook extends Component{
    state = {
        'judul':'',
        'deskripsi':'',
        'author':'',
        'harga':''
    }

    handlerChange = (e) =>{
        this.setState({ [e.target.name] : e.target.value })
    }

     componentDidMount = async() =>{
        const id = this.props.match.params.id
        const res = await axios.get('http://localhost:4000/books/'+id) //Url API kita
        this.setState({
            id:res.data.data.id,
            judul:res.data.data.judul,
            deskripsi:res.data.data.deskripsi,
            author:res.data.data.author,
            harga:res.data.data.harga
        })
     }

     handlerSubmit = async (event) =>{
        event.preventDefault();
        console.log(this.state, "ss")
        const id = this.props.match.params.id
        await axios.put('http://localhost:4000/books/'+id, this.state)
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
                            <td><input type="text" name="judul" value={this.state.judul} onChange={this.handlerChange}/></td>
                        </tr>
                        <tr>
                            <td>Description</td>
                            <td><input type="text" name="deskripsi" value={this.state.deskripsi} onChange={this.handlerChange}/></td>
                        </tr>
                        <tr>
                            <td>Author</td>
                            <td><input type="text" name="author" value={this.state.author} onChange={this.handlerChange}/></td>
                        </tr>
                        <tr>
                            <td>Book Price</td>
                            <td><input type="text" name="harga" value={this.state.harga} onChange={this.handlerChange}/></td>
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