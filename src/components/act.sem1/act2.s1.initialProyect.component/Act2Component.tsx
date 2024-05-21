import { useState } from "react";
import './Act2Component.css'

function InitialProyect() {
  const [text, addset] = useState('');
  const [text2, addset2] = useState('');

  const textOnChange = (event: any) => {
    addset(event.target.value);
  };

  const updateText = () => {
    addset2(text);
  };

  return (
    <div className="card">
      <div className="row input">
        <input type="text input" value={text} onChange={textOnChange} />
      </div>
      <div className="row">
        <button className="button" onClick={updateText}>Actualizar</button>
      </div>
      <p>Texto input: {text}</p>
      <p>Texto actualizado: {text2}</p>
    </div>
  );
}

export default InitialProyect;
