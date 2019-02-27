"use strict";

const shoppingCart = {
  templateUrl: "app/shoppingCart.html",

  controller: [ "CartService", function(CartService) {
    const vm = this;

    function handleResponse (response) {
      vm.cartItems = response.data;
    }

    CartService.getAllItems().then(response => {
      console.log(response);
      vm.cartItems = response.data;
    });

    vm.addItems = (newItem) => {
      CartService.addItems(newItem).then(handleResponse);
    };

    vm.deleteItems = (id) => {
      CartService.deleteItems(id).then(handleResponse);
    };

    vm.editItems = (id, newItem) => {
      CartService.editItems(id, newItem).then(handleResponse);
    };
  }]
}

angular
  .module("App")
  .component("shoppingCart", shoppingCart);