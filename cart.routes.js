"use strict";

const express = require("express");
const cart = express.Router();
const pool = require("./connection");

// const cartItems = [];
//   {
//     id: 1,
//     product: "book",
//     price: 13,
//     quantity: 2
//   },
//   {
//     id: 2,
//     product: "food",
//     price: 4,
//     quantity: 10
//   },
//   {
//     id: 3,
//     product: "toy",
//     price: 10,
//     quantity: 1
//   }

function selectAll(req, res){
  pool.query("select * from ShoppingCart").then(function(result) {
    res.send(result.rows);
  });
}

cart.get("/cart", (req, res) => {
  pool.query("select * from ShoppingCart").then(function (result) {
    res.send(result.rows);
  })
  console.log("GET req made");
});

cart.post("/cart", (req, res) => {
  pool.query("insert into ShoppingCart (product, price, quantity) values ($1::text, $2::int, $3::int)", [req.body.product, req.body.price, req.body.quantity]).then(function() {
    selectAll(req, res)    
  });
  console.log("POST req made");
});

cart.delete("/cart/:id", (req, res) => {
  pool.query("delete from ShoppingCart where id=$1::int", [req.params.id]).then(function() {
    selectAll(req, res)
  })
  console.log("DELETE req made");
});

cart.put("/cart/:id", (req, res) => {
  pool.query("update ShoppingCart set product=$1::text, price=$2::int, quantity=$3::int where id=$4::int",  [req.body.product, req.body.price, req.body.quantity, req.params.id]).then(function() {
    selectAll(req, res)
  });
  console.log("PUT req made");
});

module.exports = cart;