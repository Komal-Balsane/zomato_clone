// src/components/MenuCarousel.js

import React from "react";

const menuItems = [
  { id: 1, name: "Pav Bhaji", price: 120, image: "pav-bhaji.jpg" },
  { id: 2, name: "Butter Chicken", price: 280, image: "S2.jpg" },
  { id: 3, name: "Pizza", price: 250, image: "S4.jpg" },
  { id: 4, name: "Pasta", price: 180, image: "S5.jpg" },
  { id: 5, name: "Cheesecake", price: 150, image: "S6.jpeg" },
  { id: 6, name: "Biryani", price: 220, image: "biryani.jpg" },
  { id: 7, name: "Matar Paneer", price: 190, image: "mp.jpg" },
  { id: 8, name: "Chhole Bhature", price: 140, image: "CB.jpg" },
];

export default function MenuCarousel({ addToCart }) {
  const chunkSize = 4;
  const menuChunks = [];

  for (let i = 0; i < menuItems.length; i += chunkSize) {
    menuChunks.push(menuItems.slice(i, i + chunkSize));
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center">Menu Card</h2>

      <div
        id="menuCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {menuChunks.map((chunk, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <div className="d-flex justify-content-center">
                {chunk.map((item) => (
                  <div
                    key={item.id}
                    className="card mx-2"
                    style={{ width: "18rem" }}
                  >
                    <img
                      src={item.image}
                      className="card-img-top"
                      alt={item.name}
                    />

                    <div className="card-body text-center">
                      <h5 className="card-title">{item.name}</h5>

                      <h6 className="text-success mb-3">
                        ₹{item.price}
                      </h6>

                      <button
                        className="btn btn-danger w-100"
                        onClick={() => addToCart(item)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#menuCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#menuCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
        </button>
      </div>
    </div>
  );
}