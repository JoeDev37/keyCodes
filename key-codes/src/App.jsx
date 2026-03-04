
import { useState, useEffect } from "react";
import './App.css';

export function App() {

  const [input, setInput] = useState('');
  const[code, SetCode] = useState(null);
  const [event, setEvent] = useState('');

  useEffect(() => {

    const handleKeyDown = (e) => {
      setInput(e.key);
      SetCode(e.keyCode);
      setEvent(e.code);
      e.preventDefault();
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }

  }, []);

  return (

    <div className="container-div">

      <div className="input-key">{input}</div>
      <div className="input-code">{code}</div>
      <div className="input-event">{event}</div>
    
    </div>

  )
}
