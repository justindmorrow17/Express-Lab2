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

    vm.addItem = (newItem) => {
      CartService.addItem(newItem).then(handleResponse);
    };

    vm.removeItem = (id) => {
      CartService.removeItem(id).then(handleResponse);
    };

    vm.updateItem = (item) => {
      CartService.updateItem(item).then(handleResponse);
    };
  }]
}

angular
  .module("App")
  .component("shoppingCart", shoppingCart);