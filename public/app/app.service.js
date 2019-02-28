"use strict";

function CartService($http) {
  const self = this;

  self.getAllItems = () => {
    return $http({
      method: "GET", 
      url: "/cart"
    });
  };

  self.addItem = (newItem) => {
    return $http({
      method: "POST",
      url: "/cart",
      data: { ...newItem }
    });
  };

  self.removeItem = (id) => {
    return $http({
      method: "DELETE",
      url: `/cart/${id}`
    });
  };

  self.updateItem = (item, id) => {
    return $http({
      method: "PUT",
      url: `/cart/${id}`,
      data: {...item, quantity: Number(item.quantity)}
    });
  };
}

angular
  .module("App")
  .service("CartService", CartService);