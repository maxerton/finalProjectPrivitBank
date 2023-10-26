import { useDispatch, useSelector } from 'react-redux';
import logo from '../../logo.svg';
import { openMenu } from '../../store';
import { Link } from 'react-router-dom';

const Header = () => {
  const dispatch = useDispatch();
  const dollarState = useSelector(state => state.settings.dollarState);

  return (
    <div className="header">
      <nav className="navbar navbar-expand-sm navbar-dark">
        <div className="container-fluid">
          <ul className="d-flex mb-0 p-0">
            <li className='d-block d-md-none'>
              <button className="btn" type="button" onClick={() => dispatch(openMenu())}>
                <span className="navbar-toggler-icon"></span>
              </button>
            </li>
            <li><img src={logo} alt="" height='48' width='48' /></li>
            <li>
              <button className='iconButton'>
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </li>
            <li className=' d-none d-md-block'>
              Гаманець
            </li>
            <li className=' d-none d-md-block'>
              <Link to='/archive'>Архів</Link>
            </li>
          </ul>

          <ul className="d-flex jc-end mb-0 p-0">
            <li className='right_terminator d-none d-md-block'>
              {dollarState}
            </li>
            <li className=' d-none d-md-block'>
              <button className="iconButton">
                <i className="fa-regular fa-calendar"></i>
              </button>
            </li>
            <li className=' d-none d-md-block'>
              <button className="iconButton">
                <i className="fa-solid fa-square-check"></i>
              </button>
            </li>
            <li>
              <button className='btn-login'>
                <i className="fa-regular fa-user"></i>
                <span>Вхід</span>
              </button>
            </li>
          </ul>



        </div>
      </nav>
      {/* <div className="container d-flex jc-sb">
          <ul className="d-flex">
            <li><img src={logo} alt="" height='48' width='48' /></li>
            <li>
              <button className='iconButton'>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
            </li>
            <li>
              Гаманець
            </li>
            <li>
              Сервіси
              <i className="fa-solid fa-chevron-down ml-10"></i>
            </li>
            <li>
              Архів
            </li>
          </ul>
        <ul className="d-flex jc-end">
          <li className='right_terminator'>
            36.85638 / 37.38729
          </li>
          <li>
            <button className="iconButton">
              <i className="fa-regular fa-calendar"></i>
            </button>
          </li>
          <li>
            <button className="iconButton">
              <i className="fa-solid fa-square-check"></i>
            </button>
          </li>
          <li>
            <button className='btn-login'>
              <i className="fa-regular fa-user"></i>
              <span>Вхід</span>
            </button>
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default Header;
