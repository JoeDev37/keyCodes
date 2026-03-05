
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

      <p className="key">event.key</p>
      <div className="input-key">{input}</div>

      <p className="code">event.keyCode</p>
      <div className="input-code">{code}</div>

      <p className="event">event.code</p>
      <div className="input-event">{event}</div>
    
    </div>

  )
}
