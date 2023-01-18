import { assortment } from '../../data';
import StoreItem from './NoveltiesItem';

const StoreItemsList = () => {
  return assortment.map((item) => <StoreItem key={item.id} {...item} />);
};
export default StoreItemsList;
