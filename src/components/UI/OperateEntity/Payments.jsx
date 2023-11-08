import React, { useState } from 'react';
import CardsList from './CardsList';
import DropDownList from '../DropDownList/DropDownList';
import { useSelector } from 'react-redux';

const Payments = () => {
  const [selectedCards, setSelectedCards] = useState();
  const [templatesShow, setTemplatesShow] = useState(false);
  const clearSelectedCards = cardId => setSelectedCards(cardId);
  const templates = useSelector(state => state.permSetting.ibans)
  return (
    <div className='container'>
      <div className="card">
        <div className="card-header">
          <h3 className='card-title my-3 mx-2 text-center'>Переказати за реквізитами</h3>
        </div>
        <div className="card-body">
          <h3>З картки:</h3>
          <CardsList selectedCards={selectedCards} setSelectedCard={clearSelectedCards} />
          <h3>За реквізитами:</h3>
          <input type="text" className="form-control my-3" />
          <div className="d-flex">
            <DropDownList list={templates} title='Шаблони' />
            <button className='btn small-shadow' onClick={() => setTemplatesShow(!templatesShow)}>Додати шаблон</button>
          </div>
          {
            templatesShow
              ? (
                <div className="input-group my-3">
                  <input type="text" placeholder='Рахунок' className="form-control" />
                  <input type="text" placeholder='Назва' className="form-control" />
                  <button className='btn small-shadow inside'>Додати</button>
                </div>
              )
              : ''
          }

        </div>
      </div>
    </div>
  );
};

export default Payments;