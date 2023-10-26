import { useDispatch, useSelector } from 'react-redux';
import { SideMenuItem } from '../UI';
import { closeMenu } from '../../store';
import { Transition } from 'react-transition-group';
import AddedSideMenu from '../UI/AddedSideMenu/AddedSideMenu';
import { useState } from 'react';


const SideMenu = () => {
  const sideMenu = useSelector(state => state.settings.sideMenu);
  const dispatch = useDispatch();
  const [submenu, setSubMenu] = useState({ open: false, menu: [] })
  console.log('ggggg', sideMenu);
  const menu = [
    {
      name: 'Перекази', icon: 'fa-solid fa-angles-right', iconColor: '#81E492', submenu: [
        { name: 'Переказ на карту', icon: 'fa-solid fa-card', iconColor: '#FF934D' },
        { name: 'Переказ за реквізитами', icon: 'fa-solid fa-circle', iconColor: '#FF934D' },
      ]
    },
    {
      name: 'Платежі', icon: 'fa-solid fa-dollar-sign', iconColor: '#FF934D', submenu: [
        { name: 'Переказ на карту', icon: 'fa-solid fa-card', iconColor: '#FF934D' },
        { name: 'Переказ за реквізитами', icon: 'fa-solid fa-circle', iconColor: '#FF934D' },
      ]
    },
    { name: 'Картки', icon: 'fa-solid fa-credit-card', iconColor: '#AED581', submenu: [] },
  ];

  const mobile = window.innerWidth <= 768;

  const mouseEnterHandler = (menu) => {
    menu.length > 0 && setSubMenu({ open: true, menu: menu });
  }

  const mouseLeaveHandler = () => {
    setSubMenu({ open: false, menu: [] });
  }

  return (
    <Transition
      in={sideMenu.open}
      timeout={500}
    >
      {
        trClass => (
          <div className={`side-menu d-block ${trClass}`}>
            <div className="side-menu__header d-flex d-md-none jc-sb">
              <span>ПривітБанк</span>
              <button
                type="button"
                className="btn-close"
                onClick={() => dispatch(closeMenu())}
              ></button>
            </div>
            <AddedSideMenu open={submenu.open} menu={submenu.menu}></AddedSideMenu>
            <ul className='w-100 p-0'>
              {
                menu.map((el, index) => <SideMenuItem
                  key={index}
                  params={el}
                  onMouseEnter={() => mouseEnterHandler(el.submenu)}
                  onMouseLeave={mouseLeaveHandler}
                  onClick={() => mouseEnterHandler(el.submenu)}
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