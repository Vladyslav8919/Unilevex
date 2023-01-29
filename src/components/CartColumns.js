const CartColumns = () => {
  return (
    <div className="hidden md:block">
      <div className="grid grid-cols-[316px_1fr_1fr_1fr_auto] justify-center gap-4">
        <h5>item</h5>
        <h5>price</h5>
        <h5>quantity</h5>
        <h5>subtotal</h5>
        <span className="w-8 h-8"></span>
      </div>
      <hr className="mt-4 mb-12" />
    </div>
  );
};
export default CartColumns;
