import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Register from './Register'
import Fetch from './Fetch'
import './App.css'

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <>
            Counter: {count}
            <br />
            <button onClick={() => {
                setCount(count + 1);
            }}>increment</button>
            <br />
            <button onClick={() => {
                setCount(count - 1);
            }}>Decrement</button>
            <br />
            <button onClick={() => {
                setCount(count - count);
            }}>Reset</button>
        </>
    );

}

const Greet = (props) => {
    return (
        <h1>Welcome, {props.name}</h1>
    )
}

const NamePrompt = () => {
    const [name, setName] = useState("");
    return (
        <>
            <input id='nameInput' type="text" onChange={(e) => {
                setName(e.target.value)
            }} />
            <Greet name={name} />

        </>)
}

function App() {
    return (
        <BrowserRouter>
            <Header/><br/><br/>
            <Routes>
                <Route path="/" element={<h1>Home page</h1>}></Route>
                <Route path="/login" element={<h1>Login</h1>}></Route>
                <Route path="/register" element={<h1>{<Register/>}</h1>}></Route>
                <Route path="/forum" element={<h1>Forum</h1>}></Route>
                <Route path="/fetch" element={<>{<Fetch/>}</>}></Route>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default App;
