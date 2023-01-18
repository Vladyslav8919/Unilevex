const ShopItemsList = ({ items }) => {
  return (
    <div className="shop--section-center">
      {items.map((item) => {
        const { id, title, img, price, desc } = item;
        return (
          <article key={id} className="shop-item">
            <img src={img} alt={title} className="shop-item--photo" />
            <div className="shop-item--info">
              <header className="shop-list-header">
                <h4>{title}</h4>
                <h4 className="shop-item--price">${price}</h4>
              </header>
              <p className="shop-item--text">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};
export default ShopItemsList;
