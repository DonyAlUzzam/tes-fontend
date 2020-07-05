import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'

import Header from './Header'
import Book from './Books'
import AddBook from './AddBook'
import UpdateBook from './UpdateBook'

function App() {
  return (
    <BrowserRouter>
     <Header />
     <Route path="/" exact component={Book}/>
     <Route path="/add"  component={AddBook}/>
     <Route path="/edit/:id"  component={UpdateBook}/>
    </BrowserRouter>
  );
}

export default App;
