import NavMenuItem from './NavMenuItem';
import { navMenuItems } from '../../data';

const NavMenuItemsList = () => {
  return (
    <>
      {navMenuItems.map(({ id, href, icon, label }) => (
        <NavMenuItem key={id} href={href}>
          {icon}
        </NavMenuItem>
      ))}
    </>
  );
};
export default NavMenuItemsList;
