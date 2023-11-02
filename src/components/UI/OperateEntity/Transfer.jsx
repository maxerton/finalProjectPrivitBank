import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LocalCard from './LocalCard';
import { transfer } from '../../../store/Slices/cardsSlice';

const Transfer = () => {
  const cards = useSelector(state => state.cards.cards);
  const currentUser = useSelector(state => state.permSetting.currentUser);
  const myCards = cards.filter(c => c.userId === currentUser.id);

  const dispatch = useDispatch();

  const [selectedCardsFrom, setSelectedCardsFrom] = useState(myCards[0].cardId);
  const [selectedCardsTo, setSelectedCardsTo] = useState(myCards[0].cardId);
  const [warning, setWarning] = useState('');
  const [sumInput, setSumInput] = useState(0);
  const [commentInput, setCommentInput] = useState('');

  const clearSelectedCardFrom = (cardId) => {
    setSelectedCardsFrom(cardId);
  }

  const clearSelectedCardTo = (cardId) => {
    setSelectedCardsTo(cardId);
  }

  const transf = () => {
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

  console.log('dd', sumInput)

  // useEffect(() => setSumInput(sumInput % 1 !== 0 ? parseFloat(sumInput.toFixed(2)) : parseFloat(sumInput)), [sumInput])
  useEffect(() => sumInput ? setSumInput(sumInput) : setSumInput(0), [sumInput])

  return (
    <div className='container'>
      <div className="card">
        <div className="card-header">
          <h3 className='card-title my-3 mx-2 text-center'>Переказ на карту ПривітБанку</h3>
        </div>
        <div className="card-body">
          <h3>З картки:</h3>
          <div className="row flex-nowrap overflow-x-scroll my-4">
            {
              myCards.map(card => (
                <LocalCard
                  key={card.cardId}
                  card={card}
                  isSelected={selectedCardsFrom === card.cardId}
                  toggleSelection={() => clearSelectedCardFrom(card.cardId)}
                ></LocalCard>
              ))
            }
          </div>
          <h3>На картку:</h3>
          <div className="row flex-nowrap overflow-x-scroll my-4">
            {
              myCards.map(card => (
                <LocalCard
                  key={card.cardId}
                  card={card}
                  isSelected={selectedCardsTo === card.cardId}
                  toggleSelection={() => clearSelectedCardTo(card.cardId)}
                ></LocalCard>
              ))
            }
          </div>
          <div className="d-flex w-50 align-items-center flex-column mx-auto">
            <div className="input-group justify-content-between my-3">
              <h4 className='me-4'>Сума:</h4>
              <input type="number" className="form-control" min={0} value={sumInput.toString()} onChange={ev => setSumInput(parseInt(ev.target.value))} style={{ minWidth: '10em', flex: '.5 .5' }} />
            </div>
            <div className="input-group justify-content-between my-3">
              <h4 className='me-4'>Коментар:</h4>
              <input type="text" className="form-control" value={commentInput} onChange={ev => setCommentInput(ev.target.value)} />
            </div>
          </div>
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