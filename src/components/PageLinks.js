import React from 'react';
import { pageLinks } from '../data';
import PageLink from './PageLink';

const PageLinks = React.forwardRef(({ parentClass, itemClass }, ref) => {
  return (
    <ul ref={ref} className={parentClass}>
      {pageLinks.map((link) => (
        <PageLink key={link.id} {...link} itemClass={itemClass} />
      ))}
    </ul>
  );
});
export default PageLinks;
