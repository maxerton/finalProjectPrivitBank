import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { transfer } from '../../../store/Slices/cardsSlice';
import CardsList from './CardsList';
import SumInput from './SumInput';

const Transfer = () => {
  const cards = useSelector(state => state.cards.cards);
  const currentUser = useSelector(state => state.permSetting.currentUser);
  const myCards = cards.filter(c => c.userId === currentUser.id);

  const dispatch = useDispatch();

  const [selectedCardsFrom, setSelectedCardsFrom] = useState(myCards.length > 0 ? myCards[0].cardId : '');
  const [selectedCardsTo, setSelectedCardsTo] = useState(myCards.length > 0 ? myCards[0].cardId : '');
  const [warning, setWarning] = useState('');
  const [sumInput, setSumInput] = useState(0);
  const [commentInput, setCommentInput] = useState('');

  const transf = () => {
    if (!selectedCardsFrom || !selectedCardsTo) {
      setWarning('Виберіть картку');
      return
    }

    if (selectedCardsFrom === selectedCardsTo) {
      setWarning('Не можна переказувати за участі однакових карток');
      return
    }

    if (sumInput <= 0.01) {
      setWarning('Переказ має бути додатнім та не дорівнювати 0');
      return
    }

    setWarning('');
    dispatch(transfer({
      fromId: selectedCardsFrom,
      toId: selectedCardsTo,
      sum: sumInput
    }))
  }

  return (
    <div className='container'>
      <div className="card">
        <div className="card-header">
          <h3 className='card-title my-3 mx-2 text-center'>Переказ на карту ПривітБанку</h3>
        </div>
        <div className="card-body">
          <h3>З картки:</h3>
          <CardsList selectedCards={selectedCardsFrom} setSelectedCard={setSelectedCardsFrom} />
          <h3>На картку:</h3>
          <CardsList selectedCards={selectedCardsTo} setSelectedCard={setSelectedCardsTo} />
          <SumInput sumInput={sumInput} commentInput={commentInput} setCommentInput={setCommentInput} setSumInput={setSumInput} />
          <div className="d-flex align-items-center flex-column mt-3">
            {
              warning !== ''
              ? <p className='text-warning my-2'>{warning}</p>
              : ''
            }
            <button className='btn btn-success' onClick={transf}>Переказати</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transfer;