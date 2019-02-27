"use strict";

const express = require("express");
const cart = express.Router();

const cartItems = [
  {
    id: 1,
    product: "book",
    price: 13,
    quantity: 2
  },
  {
    id: 2,
    product: "food",
    price: 4,
    quantity: 10
  },
  {
    id: 3,
    product: "toy",
    price: 10,
    quantity: 1
  }
];

cart.get("/cart", (req, res) => {
  res.send(cartItems);
  console.log("GET req made");
});

cart.post("/cart", (req, res) => {
  res.send(cartItems);
  console.log("POST req made");
});

cart.delete("/cart/:id", (req, res) => {
  res.send(cartItems);
  console.log("DELETE req made");
});

cart.put("/cart/:id", (req, res) => {
  res.send(cartItems);
  console.log("PUT req made");
})

module.exports = cart;