import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, Navigate } from 'react-router-dom';
import Transfer from '../UI/OperateEntity/Transfer';
import Payments from '../UI/OperateEntity/Payments';
import Bills from '../UI/OperateEntity/Bills';

const Operate = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [page, setPage] = useState(<></>);

  const func = pathname.split('/').pop();

  useEffect(() => {
    switch (func) {
      case 'transfer':
        setPage(<Transfer></Transfer>)
        break;
      case 'payment':
        setPage(<Payments></Payments>)
        break;
      case 'bills':
        setPage(<Bills></Bills>);
        break;
      case 'inet':
        setPage(<></>);
        break;
      default:
        setPage(<></>);
        navigate('/');
        break;
    }
  }, [func]);


  return (
    <div className='ms-md-3'>
      {page}
    </div>
  );
};

export default Operate;