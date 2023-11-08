import React from 'react';
import { useSelector } from 'react-redux';

const Archive = () => {
  const user = useSelector(state => state.permSetting.currentUser);
  const userArchive = useSelector(state => state.history.history.filter(data => (data.from.type === 'user' && data.from.id === user.id) || (data.to.type === 'user' && data.to.id === user.id)));
  
  const mobile = window.innerWidth < 768;

  return (
    <div className='container-fluid'>
      {
        mobile 
        ? (
          <></>
        )
        : (
          <></>
        )
      }
    </div>
  );
};

export default Archive;