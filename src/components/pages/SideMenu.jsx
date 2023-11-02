import { useDispatch, useSelector } from 'react-redux';
import { SideMenuItem } from '../UI';
import { closeMenu } from '../../store';
import { Transition } from 'react-transition-group';
import AddedSideMenu from '../UI/AddedSideMenu/AddedSideMenu';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const SideMenu = () => {
  const sideMenu = useSelector(state => state.settings.sideMenu);
  const dispatch = useDispatch();
  const [submenu, setSubMenu] = useState({ open: false, menu: [] });
  const navigate = useNavigate();

  const menu = [
    {
      name: 'Перекази', icon: 'fa-solid fa-angles-right', iconColor: '#81E492', submenu: [
        { name: 'Переказ на карту', icon: 'fa-solid fa-credit-card', iconColor: '#81E492', link: '/operations/transfer' },
        { name: 'Переказ за реквізитами', icon: 'fa-solid fa-plane-up', iconColor: '#81E492', link: '/operations/payment' },
      ]
    },
    {
      name: 'Платежі', icon: 'fa-solid fa-dollar-sign', iconColor: '#FF934D', submenu: [
        { name: 'Комунальні платежі', icon: 'fa-solid fa-home', iconColor: '#FF934D', link: '/operations/bills' },
        { name: 'Інтернет та ТБ', icon: 'fa-solid fa-globe', iconColor: '#FF934D', link: '/operations/inet' },
      ]
    },
    { name: 'Картки', icon: 'fa-solid fa-credit-card', iconColor: '#AED581', submenu: [], link: '/cards' },
  ];


  const [currentMenu, setCurrentMenu] = useState(menu);

  const mobile = window.innerWidth <= 768;

  const mouseEnterHandler = (menu) => {
    if (mobile) {
      setCurrentMenu(menu);
    } else {
      if (menu.length > 0) {
        setSubMenu({ open: true, menu: menu });
      } else {
        setSubMenu({ open: false, menu: [] });
      }
    }
  }

  const mouseLeaveHandler = () => {
    if (!mobile) {
      setSubMenu({ open: false, menu: [] });
    }
  }

  const clickItemHandler = (item) => {
    if (item.link) {
      navigate(item.link);
      mobile && dispatch(closeMenu());
      mobile && setCurrentMenu(menu)
    } else {
      mouseEnterHandler(item.submenu)
    }
  }

  return (
    <Transition
      in={sideMenu.open}
      timeout={500}
    >
      {
        trClass => (
          <div className={`side-menu d-block ${trClass}`} onBlur={() => setSubMenu({ open: false, menu: [] })}>
            <div className="side-menu__header d-flex d-md-none jc-sb">
              {
                currentMenu !== menu
                  ? (<button onClick={() => setCurrentMenu(menu)}>
                    <i className="fa-solid fa-chevron-left"></i>
                  </button>)
                  : ''
              }
              <span>ПривітБанк</span>
              <button
                type="button"
                className="btn-close ms-auto"
                onClick={() => dispatch(closeMenu())}
              ></button>
            </div>
            {!mobile
              ? <AddedSideMenu open={submenu.open} menu={submenu.menu} onMouseLeaveC={mouseLeaveHandler} onClick={clickItemHandler}></AddedSideMenu>
              : ''}
            <ul className='w-100 p-0'>
              {
                currentMenu.map((el, index) => <SideMenuItem
                  key={index}
                  params={el}
                  onMouseEnter={() => mouseEnterHandler(el.submenu)}
                  // onMouseLeave={mouseLeaveHandler}
                  onClick={() => clickItemHandler(el)}
                ></SideMenuItem>)
              }
            </ul>
          </div>
        )
      }
    </Transition>
  );
};

export default SideMenu;