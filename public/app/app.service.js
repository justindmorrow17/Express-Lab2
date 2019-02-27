"use strict";

function CartService($http) {
  const self = this;

  self.getAllItems = () => {
    return $http({
      method: "GET", 
      url: "/cart"
    });
  };

  self.addItems = (newItem) => {
    return $http({
      method: "POST",
      url: "/cart",
      data: { ...newItem }
    });
  };

  self.deleteItems = (id) => {
    return $http({
      method: "DELETE",
      url: `/cart/${id}`
    });
  };

  self.editItems = (id, newItem) => {
    return $http({
      method: "PUT",
      url: `/cart/${id}`,
      data: { id: newItem }
    })
  }
}

angular
  .module("App")
  .service("CartService", CartService);