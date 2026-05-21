import { useState } from 'react'
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
        <>
            <Counter />
            <br />
            <NamePrompt />
            <p>Hello World</p>
        </>
    )
}

export default App;
