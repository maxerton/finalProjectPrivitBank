import React, { useState } from 'react';

const DropDownList = ({list, title='Dropdown'}) => {
  const [ddShow, setDDShow] = useState(false);
  
  const clickHandlerLi = () => {
    
  }

  const DDShowToggle = () => setDDShow(!ddShow);
  return (
    <div class="dropdown">
      <button className="btn small-shadow dropdown-toggle" type="button" onClick={DDShowToggle}>
        {title}
      </button>
      <ul class={`dropdown-menu dropdown-menu-dark ${ddShow ? 'show' : ''}`} onClick={DDShowToggle}>
        {
          list?.map(el => <li className='dropdown-item' onClick={clickHandlerLi}>{el.name}</li>)
        }
      </ul>
    </div>

  );
};

export default DropDownList;