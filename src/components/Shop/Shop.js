import { useState } from 'react';
import { shopData } from '../../data';
import ShopCategories from './ShopCategories';
import ShopItemsList from './ShopItemsList';
import Title from '../Title';

const allCategories = [
  'all',
  ...new Set(shopData.map((item) => item.category)),
];

const Shop = () => {
  const [shopItems, setShopItems] = useState(shopData);
  const [categories] = useState(allCategories);
  // console.log('categories: ' + categories);

  const filterItems = (category) => {
    if (category === 'all') {
      setShopItems(shopData);
      return;
    }
    const newItems = shopData.filter((item) => item.category === category);
    setShopItems(newItems);
  };

  return (
    <section className="shop section" id="new">
      <div className="title">
        <Title>Our Shop</Title>
      </div>
      <ShopCategories categories={categories} filterItems={filterItems} />
      <ShopItemsList items={shopItems} />
    </section>
  );
};
export default Shop;
