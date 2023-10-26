import { Link } from "react-router-dom";
import { LangSelector } from "../UI";


const Footer = () => {

  return (
    <div className='footer'>
      <div className="container">
        <div className="d-md-flex flex-wrap jc-sb" style={{alignItems: 'start'}}>
          <div className="footer-info">
            <ul className='footer-nav'>
              <li><a href="#0">Відділення</a></li>
              <li><a href="#0">Регламент і тарифи</a></li>
              <li><a href="#0">Про персональні дані</a></li>
              <li><a href="#0">Безпека</a></li>
              <li><a href="#0">API</a></li>
            </ul>
            <div className="footer-text-contacts">
              <a href='tel:3700'>3700</a>
              <span>безкоштовно з мобільних</span>
              <a href='tel:+380737161131'>+38-073-716-11-31</a>
              <span>для дзвінків з-за кордону</span>
            </div>
            <div className="copyright">
              &copy; 2023 ПривітБанк Ліцензія 22
            </div>
          </div>

          <div className="footer-settings">
            <div className="lang-theme-settings">
              <LangSelector></LangSelector>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;