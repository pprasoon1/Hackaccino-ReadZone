import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateBook from './pages/CreateBooks';
import ShowBook from './pages/ShowBook';
import EditBook from './pages/EditBook';
import DeleteBook from './pages/DeleteBook';
import Home1 from './pages/Home1';
import LLogin from './components/LLogin';

const App = () => {
  return (
    <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home1/>} />
    <Route path='/login' element={<LLogin/>} />
    <Route path='/home' element = {<Home/>}/>
    <Route path='/books/create' element={<CreateBook/>} />
    <Route path='/books/details/:id' element={<ShowBook/>} />
    <Route path='/books/edit/:id' element={<EditBook/>} />
    <Route path='books/delete/:id' element={<DeleteBook/>} />
    
   </Routes>
   </BrowserRouter>
  )
}

export default App