var Order = (function () {
    function Order(adress, number, optionalAdress, paymentOptions, orderItems, id) {
        if (orderItems === void 0) { orderItems = []; }
        this.adress = adress;
        this.number = number;
        this.optionalAdress = optionalAdress;
        this.paymentOptions = paymentOptions;
        this.orderItems = orderItems;
        this.id = id;
    }
    return Order;
}());
var OrderItem = (function () {
    function OrderItem(quantity, menuId) {
        this.quantity = quantity;
        this.menuId = menuId;
    }
    return OrderItem;
}());
export { Order, OrderItem };
//# sourceMappingURL=order.model.js.map