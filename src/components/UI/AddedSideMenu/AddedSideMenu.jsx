import React from 'react';
import { Transition } from 'react-transition-group';
import { SideMenuItem } from '../SideMenuItem/SideMenuItem';


const AddedSideMenu = ({open, menu, onMouseLeaveC, onClick}) => {
  return (
    <Transition
      in={open}
      timeout={100}
      mountOnEnter
      unmountOnExit
    >
      {
        trClass => (
          <div className={`side-menu addition d-block ${trClass}`} onMouseLeave={onMouseLeaveC}>
            
            <ul className='w-100 p-0'>
              {
                menu.map((el, index) => <SideMenuItem 
                key={index} 
                params={el}
                onClick={() => onClick(el)}
                ></SideMenuItem>)
              }
            </ul>
          </div>
        )
      }
    </Transition>
  );
};

export default AddedSideMenu;