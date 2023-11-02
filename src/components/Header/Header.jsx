import { useDispatch, useSelector } from 'react-redux';
import logo from '../../logo.svg';
import { openMenu } from '../../store';
import { Link } from 'react-router-dom';
import { loginModalControl } from '../../store/Slices/settingSlice';
import { logOut } from '../../store/Slices/permSettingSlice';

const Header = () => {
  const dispatch = useDispatch();
  const dollarState = useSelector(state => state.settings.dollarState);
  const currentUser = useSelector(state => state.permSetting.currentUser);

  const onLoginHandler = () => {
    if (currentUser) {
      dispatch(logOut());
    } else {
      dispatch(loginModalControl(true));
    }
  }

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
            <li><Link to={'/'}><img src={logo} alt="" height='48' width='48' /></Link></li>
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
            {
              currentUser
                ? (
                  <li className='mx-2'>{currentUser.login}</li>
                )
                : ''
            }
            <li>
              <button className='btn-login' onClick={onLoginHandler}>
                <i className="fa-regular fa-user"></i>
                <span>
                  {
                    currentUser
                      ? 'Вийти'
                      : 'Вхід'
                  }</span>
              </button>
            </li>
          </ul>



        </div>
      </nav>
    </div>
  );
};

export default Header;
