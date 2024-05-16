import { useState } from "react";
import './OneComponent.css'

function OneComponent() {
  const [text, addset] = useState(0);
  const [text2, addset2] = useState(0);

  const textOnChange = (event: any) => {
    addset(event.target.value);
  };

  const updateText = () => {
    addset2(text);
  };

  return (
    <>
      <div className="row input">
        <input type="text input" value={text} onChange={textOnChange} />
      </div>
      <div className="row">
        <button onClick={updateText}>Actualizar</button>
      </div>
      <p>Texto input: {text}</p>
      <p>Texto actualizado: {text2}</p>
    </>
  );
}

export default OneComponent;
