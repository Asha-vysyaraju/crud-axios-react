
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Routes, Route } from "react-router-dom"

import Header from './components/Header';


import { BrowserRouter } from "react-router-dom";
import { AddUser } from './components/AddUser';
import { Home } from './components/Home';
import { EditUser } from './components/EditUser';
function App() {

  return (

    <BrowserRouter>
      <div className="App">
        <Header />


        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/users/create" exact element={<AddUser />} />
          <Route path="/user/edit/:userId" exact element={<EditUser />} />



        </Routes>
      </div>
    </BrowserRouter>


  );
}

export default App;

