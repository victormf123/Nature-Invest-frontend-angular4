var CartItemModel = (function () {
    function CartItemModel(menuItem, quantity) {
        if (quantity === void 0) { quantity = 1; }
        this.menuItem = menuItem;
        this.quantity = quantity;
    }
    CartItemModel.prototype.value = function () {
        return this.menuItem.price * this.quantity;
    };
    return CartItemModel;
}());
export { CartItemModel };
//# sourceMappingURL=cart-item.model.js.map