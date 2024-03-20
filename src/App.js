import { HashRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Login.js';
import Home from './Components/Home';
import Main from './Components/main';
import Signup from './Components/Signup.js';
import Dashboard from './Components/Dashboard.js';
import Input from './Components/input.js';
import { useEffect, useState } from 'react';
import Contact from './Components/contact.js';
import EditProperties from './Components/EditProperties.js';
import MainListings from './Components/mainListings.js';

function App() {
  const [id, setId] = useState([]);

  useEffect(() => {
    try {
      const storedId = localStorage.getItem('id');
      if (storedId) {
        setId(JSON.parse(storedId));
      }
    }
    catch { }
  }, []
  )
  const getId = (childdata) => {
    setId(childdata)
    localStorage.setItem('id', JSON.stringify(childdata));

  }
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          {/* {console.log(id)} */}
          <Route path='/' element={<Home />} />
          <Route path='/Login' element={<Login getId={getId} />} />
          <Route path='/Login/Signup' element={<Signup />}></Route>
          <Route path="/main" element={<Main />}></Route>
          <Route path='/contact' element={<Contact id={id} />}></Route>
          <Route path="/Dashboard" element={<Dashboard id={id} />}></Route>
          <Route path="/input" element={<Input id={id} />}></Route>
          <Route path='/edit/:data' element={<EditProperties />}></Route>
          <Route path='/Listings' element={<MainListings></MainListings>}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
