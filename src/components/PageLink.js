const PageLink = ({ href, label, itemClass }) => {
  return (
    <li>
      <a href={href} className={itemClass}>
        {label}
      </a>
    </li>
  );
};
export default PageLink;
