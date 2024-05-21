import React from "react";

import "./ImgComponent.css";

const GalleryProyect: React.FC = () => {
  const imgs = ["img1", "img2", "img3", "img4", "img5", "img6", "img7", "img8"];
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <ol className="carousel-indicators">
        {imgs.map((_, index) => (
          <li
            key={index}
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={index.toString()}
            className={index === 0 ? "active" : ""}
          ></li>
        ))}
      </ol>
      <div className="carousel-inner">
        {imgs.map((item, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <img
              className="d-block w-100"
              src={`src/assets/images/carrusel/${item}.png`}
              alt={`Imagen ${index + 1}`}
            />
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default GalleryProyect;
