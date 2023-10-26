import style from './style.module.css';

export const SideMenuItem = ({params, ...args}) => {
  const {item, itemIcon, itemName, itemArrow} = style;
  return (
    <li className={item} {...args}>
      <div className={itemIcon} style={{'--color': params.iconColor}}>
        <i className={params.icon}></i>
      </div>
      <div className={itemName}>{params.name}</div>
      <div className={itemArrow}>
        {
          params.submenu?.length > 0 
          ? <i className='fa-solid fa-chevron-right'></i>
          : ''
        }
      </div>
    </li>
  );
};