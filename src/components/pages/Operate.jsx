import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, Navigate } from 'react-router-dom';
import Transfer from '../UI/OperateEntity/Transfer';

const Operate = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [page, setPage] = useState();

  const func = pathname.split('/').pop();

  useEffect(() => {
    switch (func) {
      case 'transfer':
        setPage(<Transfer></Transfer>)
        break;
      case 'payment':
        break;
      case 'bills':
        break;
      case 'inet':
        break;
      default:
        navigate('/');
        break;
    }
  }, []);


  return (
    <div className='ms-3'>
      {page}
    </div>
  );
};

export default Operate;