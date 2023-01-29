import { NavLink } from 'react-router-dom';

const PageLink = ({ path, label, itemClass, onClose }) => {
  let activeStyle = {
    fontWeight: '500',
  };
  return (
    <li>
      <NavLink
        to={path}
        className={itemClass}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        onClick={onClose}
      >
        {label}
      </NavLink>
    </li>
  );
};
export default PageLink;
