import { pageLinks } from '../data';
import PageLink from './PageLink';

const PageLinks = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass}>
      {pageLinks.map((link) => (
        <PageLink key={link.id} {...link} itemClass={itemClass} />
      ))}
    </ul>
  );
};
export default PageLinks;
