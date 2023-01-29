const CartColumns = () => {
  return (
    <div className="hidden md:block">
      <div className="grid grid-cols-[316px_1fr_1fr_1fr_auto] justify-center gap-4">
        <h5>Item</h5>
        <h5>Price</h5>
        <h5>Quantity</h5>
        <h5>Subtotal</h5>
        <span className="w-8 h-8"></span>
      </div>
      <hr className="mt-4 mb-12" />
    </div>
  );
};
export default CartColumns;
