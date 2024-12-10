import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './components/About'
import Contact from './components/Contact'
import SignUp from './pages/Signup'
import Login from './pages/Login';
import CookDash from './pages/CookFolder/CookDash';
import UserDash from './pages/UserFolder/UserDash';
import AddItem from './pages/CookFolder/AddItems';



function App(){
    return(
    <Router>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>} />
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path='/dash/user' element={<UserDash/>}/>
            <Route path="/dash/cook" element={<CookDash/>}/>
            <Route path='/add-items' element={<AddItem/>}/>


        </Routes>
    </Router>
    )}
export default App;
