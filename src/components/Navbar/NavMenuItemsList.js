import NavMenuItem from './NavMenuItem';
import { navMenuItems } from '../../data';

const NavMenuItemsList = ({ navbarOpen }) => {
  return (
    <>
      {navMenuItems.map(({ id, href, icon, label }) => (
        <NavMenuItem key={id} href={href}>
          {icon}
          {navbarOpen && <span className="ml-2">{label}</span>}
        </NavMenuItem>
      ))}
    </>
  );
};
export default NavMenuItemsList;
