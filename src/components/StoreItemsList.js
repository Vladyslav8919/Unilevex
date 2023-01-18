import { assortment } from '../data';
import StoreItem from './StoreItem';

const StoreItemsList = () => {
  return assortment.map((item) => <StoreItem key={item.id} {...item} />);
};
export default StoreItemsList;
