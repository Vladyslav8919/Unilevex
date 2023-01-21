import { socialLinks } from '../data';
import PageLinks from './PageLinks';

const Footer = () => {
  return (
    <footer className="section footer ">
      <PageLinks parentClass="footer-links" itemClass="footer-link" />
      <ul className="footer-icons">
        {socialLinks.map(({ id, href, icon }) => (
          <li key={id}>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="footer-icon"
            >
              <i className={icon}></i>
            </a>
          </li>
        ))}
      </ul>
      <p className="copyright">
        Copyright &copy; <span id="date">{new Date().getFullYear()}</span>{' '}
        Unilevex by Vladyslav Pshevlotskyi
        <br />
        All Rights Reserved
      </p>
    </footer>
  );
};
export default Footer;
