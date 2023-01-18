const NavMenuItem = ({ children, href }) => {
  return (
    <li className="nav-item">
      <a
        className="px-3 py-2 flex items-center  text-sm leading-snug text-black hover:opacity-75"
        href={href}
      >
        {children}
      </a>
    </li>
  );
};
export default NavMenuItem;
