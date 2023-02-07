import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import AddUser from './components/AddUser';
import CodeforInter from './components/CodeforInterview';
import AllUsers from './components/AllUsers';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <NavBar/>
       <Routes>
     <Route path='/' element={<CodeforInter/>}></Route>
      <Route path='/all' element={<AllUsers/>}></Route>
     <Route path='add' element={<AddUser/>}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}
export default App;
