//import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import InitialProyect from "../act.sem1/act2.s1.initialProyect.component/Act2Component";
import GalleryProyect from "../act.sem1/act3.s1.gallery.component/Act2Components";
import DevelopmentEnvironment from "../act.sem1/act1.s1.component/Act1Components";
import "./App.css";

function App() {
  //const [count, setCount] = useState(0);

  return (
    <Router>
      <div className="col-12">
        <div className="col-3 col1">
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Semana 1
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <Link to="/">Development Environment</Link>
                  <br /> <hr />
                  <Link to="/initial">Initial Proyect</Link>
                  <br /> <hr />
                  <Link to="/gallery">Gallery Proyect</Link>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Semana 2
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">Sin informacion</div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Semana 3
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">Sin informacion</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-9 col2">
          <div className="col-12">
            <Routes>
              <Route path="/" element={<DevelopmentEnvironment />} />
              <Route path="/initial" element={<InitialProyect />} />
              <Route path="/gallery" element={<GalleryProyect />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
